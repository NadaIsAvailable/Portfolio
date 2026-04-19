import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './Connect.css';

export default function Connect() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );

    window.location.href = `mailto:kevinzheng0718@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <main className='connect'>
        <div id="connect-text">
          <h1>Get in touch</h1>

          <p>I am always open to new opportunities and collaborations. Feel free to reach out to me through any of the platforms below.</p>
          <p>I am currently looking for a <strong>summer/fall internships and co-op positions</strong> in game development, web development, and software engineering.</p>

          <div id="contact-icons">
            <a href="mailto:kevinzheng0718@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="tel:+14102310373" >
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="https://github.com/NadaIsAvailable" target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/kzheng0718/" target='_blank'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          validate
          onSubmit={handleSubmit}
          autoComplete="off"
          id="connect-form"
        >
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            required
            fullWidth
          />

          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            required
            fullWidth
          />

          <TextField
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
          <button type="submit">Send</button>
        </Box>
      </main>
    </>
  );
}