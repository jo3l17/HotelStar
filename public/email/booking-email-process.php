<?php
    
	// Edit below lines and give your email and subject
    $email_to = "kiswasolutions06@gmail.com";
    $subject = "Message is sent from ";
	         
	// input fields 
	$email_from = $_POST['txt_email']; 
    $first_name = $_POST['txt_first_name']; 
	$last_name = $_POST['txt_last_name']; 
	$phone = $_POST['txt_phone']; 
	$arrival_date = $_POST['txt_arrival_date']; 
	$departure_date = $_POST['txt_departure_date']; 
	$adults = $_POST['txt_adults']; 
	$children = $_POST['txt_children'];
	$infants = $_POST['txt_infants'];
	$message = $_POST['txt_message'];
	
	// clean message
	function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }
   
   
   // email message
    $email_message .= "Name: ".clean_string($first_name)." ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Phone: ".clean_string($phone)."\n";
	$email_message .= "Arrival Date: ".clean_string($arrival_date)."\n";
	$email_message .= "Departure Date: ".clean_string($departure_date)."\n";
	$email_message .= "Adults: ".clean_string($adults)."\n";
	$email_message .= "Children: ".clean_string($children)."\n";
	$email_message .= "Infants: ".clean_string($infants)."\n";
   echo  $email_message .= "Message: ".clean_string($message)."\n";
	
	
	// headers
    $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
   
  // email send 
   if(@mail($email_to, $subject, $email_message, $headers))
   	echo "sent";
   else 
	echo "fail";
?>