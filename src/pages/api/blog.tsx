import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse): void => {
  const blog = [
    {
      id: 1,
      title: 'Dark mode to your React app',
      lead: 'Dark mode is quickly becoming an essential feature on the web — Twitter’s recent redesign has the much-requested feature baked in, as does Facebook’s (beta) redesign, not to mention numerous smaller sites adding support.',
      article:
        '<p>Wanting to keep up with the cool kids, I decided to have a go at adding dark mode to my own personal website. After a night of picking out some colours and procrastinating over the technical approach, piecing together a working implementation turned out to be much quicker and easier than I had expected. I’ve detailed the approach I took here, in the hope that someone else might find it useful!</p><p>Note: this approach is great for smaller sites, but for more complex cases you might need to combine it with other techniques — there are some resources that might be handy linked at the end.</p><h2>So what are we actually trying to build here?</h2><p>Great question. The key features I’ll outline are:</p><ul><li>Detecting if a device is set to dark mode at the system level</li><li>Switching the theme whenever the system-level setting changes</li><li>A simple system (using CSS variables) to swap colours throughout the site</li><li>A toggle to let people manually switch between dark and light themes</li><li>A SCSS mixin to support more complex theming, for when you need to do more than just swap out a colour.</li></ul>',
      url: 'https://dev.to/nw/adding-dark-mode-to-your-react-app-with-hooks-media-queries-and-css-variables-50h0',
      slug: 'dark-mode-to-your-react-app'
    },
    {
      id: 2,
      title: 'How to send Email with node js for free',
      lead: 'If you are building a project that involves customer interactions, then probably at some point you would have to send them an email as well.',
      article:
        '<p>If you are building a project that involves customer interactions, then probably at some point you would have to send them an email as well.</p><p>For example, on successful form submits, you need to send a confirmation email. Or on every purchase, a receipt or order details.</p><p>You could hook up some of the existing apis like send in blue, mail chimp etc, but you can do it for free in nodejs itself.</p><p>Node Mailer is a nodejs module, that makes it easy to send emails.</p><p>Here\'s how you do it</p><p><strong>-&gt; First, install Node Mailer</strong><br></p><p><code>npm install nodemailer</code><br></p><p><strong>-&gt; Then <code>requir(\'nodemailer\')</code></strong></p><p><strong>-&gt; Create a transporter</strong></p><p>Transporter is the object that is able to send the email. It contains data about the connection. <br>I\'m using gmail to send emails and this is how the transporter looks for me:<br></p><p><code>const transporter = nodemailer.createTransport({<br>service: \'gmail\',<br>auth: {<br>user: myemail@gmail.com,<br>pass: password<br>}<br>});</code><br></p><p><strong>-&gt; We also need an object containing the message to be sent</strong><br></p><p><code>const mailOptions = {<br>from: \'The Idea project\',<br>to: toAddress,<br>subject: \'My first Email!!!\',<br>text: "This is my first email. I am so excited!"<br>};</code><br></p><p>You can send html emails with html key instead of text.</p><p><strong>-&gt; Next, to actually send the email, use <br><code>transporter.sendMail(mailOptions, callback)</code></strong></p><p>The call back takes error and info arguments and is executed once the sending process is complete. You can use this to log errors if any.</p><p>You can customise the emails you send, where you send from and how you send it anyway you want. Read the docs <a href="https://nodemailer.com/about/">here</a>.</p><p>The complete code should look like this,</p><div class="highlight js-code-highlight"><pre class="highlight plaintext"><code>![Full code nodemailer](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i116of2cgdf0d7eljgtb.png)</code></pre><div class="highlight__panel js-actions-panel"><div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title><path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>',
      url: 'https://dev.to/fawazsullia/how-to-send-email-with-node-js-for-free-4okc',
      slug: 'how-to-send—email-with-node-js-for-free'
    },
    {
      id: 3,
      title: 'Different approach to loading screen in React',
      lead: 'Most of the loading screens I saw, based on boolean variable loading. Then based on it, component loadingScreen is returned or the actual page. The more data I wanted to load, the more if statements I had to make to check if I am still loading. More such ifs sounds like a bad idea to me.',
      article:
        "<p>Most of the loading screens I saw, based on boolean variable <code>loading</code>. Then based on it, component <code>loadingScreen</code> is returned or the actual page. The more data I wanted to load, the more <code>if statements</code> I had to make to check if I am still loading. More such ifs sounds like a bad idea to me 🤷&zwj;♀️.</p><p>I wanted to make my <code>LoadingScreen</code> component smart enough to figure out, if it should be still displayed.</p><p>Let's keep loading screen simple for this example. If it has children, display them. Else, use default loader.<br></p>",
      url: 'https://dev.to/kuba_szw/different-approach-to-loading-screen-in-react-249b',
      slug: 'different-approach-to-loading-screen-in-react'
    }
  ];

  return response.json(blog);
};

// http://localhost:3000/api/blog
