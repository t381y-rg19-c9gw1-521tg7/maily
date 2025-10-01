emailjs.init("Brg2JJH4uao28SQ5z"); // Your EmailJS public key

document.getElementById("form").onsubmit = async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const token = crypto.randomUUID();
  const verifyUrl = `${location.origin}/verify.html?token=${token}`;

  document.getElementById("status").innerText = "Sending email...";

  try {
    await emailjs.send("service_spkk3xl", "template_ojpsetf", {
      to_email: email,
      verify_link: verifyUrl
    });

    localStorage.setItem(token, "valid");
    document.getElementById("status").innerText = "Email sent! Check your inbox.";
  } catch {
    document.getElementById("status").innerText = "Error sending email.";
  }
};
