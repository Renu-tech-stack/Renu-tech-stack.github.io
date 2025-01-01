<script>
  // Add functionality to open WhatsApp, Email, and Call
  document.getElementById("whatsapp").addEventListener("click", function () {
    const phoneNumber = "9047689514"; // Use the phone number from before
    window.open(https://wa.me/${phoneNumber}, "_blank");
  });

  document.getElementById("email").addEventListener("click", function () {
    const email = "infixhitech@gmail.com"; // Use the email from before
    window.open(mailto:${email}, "_self");
  });

  document.getElementById("call").addEventListener("click", function () {
    const phoneNumber = "9047689514"; // Use the phone number from before
    window.open(tel:${phoneNumber}, "_self");
  });
</script>