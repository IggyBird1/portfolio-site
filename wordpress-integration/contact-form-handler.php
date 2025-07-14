<?php
/**
 * WordPress Contact Form Handler for BeTheme
 * Add this to your theme's functions.php or create a custom plugin
 */

// Add AJAX handlers for logged in and non-logged in users
add_action('wp_ajax_submit_contact_form', 'handle_contact_form_submission');
add_action('wp_ajax_nopriv_submit_contact_form', 'handle_contact_form_submission');

function handle_contact_form_submission() {
    // Verify nonce for security
    if (!wp_verify_nonce($_POST['nonce'], 'contact_form_nonce')) {
        wp_die('Security check failed');
    }

    // Sanitize input data
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $subject = sanitize_text_field($_POST['subject']);
    $message = sanitize_textarea_field($_POST['message']);

    // Validate required fields
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        wp_send_json_error('All fields are required.');
        return;
    }

    // Validate email
    if (!is_email($email)) {
        wp_send_json_error('Please provide a valid email address.');
        return;
    }

    // Prepare email content
    $admin_email = get_option('admin_email');
    $site_name = get_bloginfo('name');
    
    // Email to admin
    $admin_subject = "New Contact Form Submission: " . $subject;
    $admin_message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f8fafc; }
            .contact-details { background: white; padding: 15px; border-radius: 5px; margin: 10px 0; }
            .message-content { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8b5cf6; }
        </style>
    </head>
    <body>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
            <p>From: {$site_name}</p>
        </div>
        <div class='content'>
            <div class='contact-details'>
                <h3>Contact Details</h3>
                <p><strong>Name:</strong> {$name}</p>
                <p><strong>Email:</strong> {$email}</p>
                <p><strong>Subject:</strong> {$subject}</p>
            </div>
            <div class='message-content'>
                <h3>Message</h3>
                <p>" . nl2br($message) . "</p>
            </div>
            <p><strong>Reply to:</strong> {$email}</p>
        </div>
    </body>
    </html>";

    // Email headers
    $headers = array(
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . $site_name . ' <noreply@' . $_SERVER['HTTP_HOST'] . '>',
        'Reply-To: ' . $email
    );

    // Send email to admin
    $admin_sent = wp_mail($admin_email, $admin_subject, $admin_message, $headers);

    // Send confirmation email to user
    $user_subject = "Thank you for contacting " . $site_name;
    $user_message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; padding: 20px; text-align: center; }
            .content { padding: 30px; background: white; }
            .summary { background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #8b5cf6; }
            .cta { text-align: center; margin: 30px 0; }
            .button { display: inline-block; background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class='header'>
            <h1>IGAL V</h1>
            <p>Creative Portfolio</p>
        </div>
        <div class='content'>
            <h2>Thank you for reaching out, {$name}!</h2>
            <p>I've received your message about \"{$subject}\" and I'll get back to you as soon as possible, usually within 24-48 hours.</p>
            
            <div class='summary'>
                <h3>Your Message Summary</h3>
                <p>" . substr($message, 0, 200) . (strlen($message) > 200 ? '...' : '') . "</p>
            </div>
            
            <p>In the meantime, feel free to check out my latest work on my portfolio or connect with me on social media.</p>
            
            <div class='cta'>
                <a href='" . home_url() . "' class='button'>View My Portfolio</a>
            </div>
            
            <hr style='border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;'>
            
            <p style='color: #9ca3af; font-size: 14px; text-align: center;'>
                Best regards,<br>
                <strong>IGAL V</strong><br>
                Creative Storyteller & Digital Artist
            </p>
        </div>
    </body>
    </html>";

    $user_headers = array(
        'Content-Type: text/html; charset=UTF-8',
        'From: IGAL V <noreply@' . $_SERVER['HTTP_HOST'] . '>'
    );

    $user_sent = wp_mail($email, $user_subject, $user_message, $user_headers);

    // Store in database (optional)
    global $wpdb;
    $table_name = $wpdb->prefix . 'contact_submissions';
    
    $wpdb->insert(
        $table_name,
        array(
            'name' => $name,
            'email' => $email,
            'subject' => $subject,
            'message' => $message,
            'submitted_at' => current_time('mysql'),
            'ip_address' => $_SERVER['REMOTE_ADDR']
        )
    );

    if ($admin_sent && $user_sent) {
        wp_send_json_success('Message sent successfully! Check your email for confirmation.');
    } else {
        wp_send_json_error('There was an issue sending your message. Please try again.');
    }
}

// Create database table on theme activation
function create_contact_submissions_table() {
    global $wpdb;
    
    $table_name = $wpdb->prefix . 'contact_submissions';
    
    $charset_collate = $wpdb->get_charset_collate();
    
    $sql = "CREATE TABLE $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name tinytext NOT NULL,
        email varchar(100) NOT NULL,
        subject text NOT NULL,
        message longtext NOT NULL,
        submitted_at datetime DEFAULT CURRENT_TIMESTAMP,
        ip_address varchar(45),
        PRIMARY KEY (id)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}

// Hook to create table
add_action('after_switch_theme', 'create_contact_submissions_table');
?>
