<h1 align="center">AI Powered WhatsApp Clone</h1>

<p align="center">Enhance your WhatsApp experience with AI-driven features by integrating GPT and DALL-E-3.</p>

<br/>

## 🛠 Tech Stack

<div align="center">
  <a href="https://convex.dev/" target="_blank" rel="noreferrer" style="margin-right: 10px; text-decoration: none !important;">
    <img src="https://convex.dev/_next/static/media/logo.545db723.svg" alt="convex" width="40" height="40"/>
  </a>
  <a href="https://nextjs.org/" target="_blank" rel="noreferrer" style="margin-right: 10px; text-decoration: none !important;">
    <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/>
  </a>
  <a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer" style="margin-right: 10px; text-decoration: none !important;">
    <img src="https://shadcn.dev/img/logo.svg" alt="shadcn" width="40" height="40"/>
  </a>
  <a href="https://docs.convex.dev/file-storage" target="_blank" rel="noreferrer" style="margin-right: 10px; text-decoration: none !important;">
    <img src="https://convex.dev/_next/static/media/logo.545db723.svg" alt="convex file storage" width="40" height="40"/>
  </a>
  <a href="https://www.zegocloud.com" target="_blank" rel="noreferrer" style="margin-right: 10px; text-decoration: none !important;">
    <img src="https://www.zegocloud.com/favicon.ico" alt="zegocloud" width="40" height="40"/>
  </a>
  <a href="https://clerk.dev/" target="_blank" rel="noreferrer" style="margin-right: 10px; text-decoration: none !important;">
    <img src="https://clerk.dev/assets/images/logo/monogram-light.svg" alt="clerk" width="40" height="40"/>
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" style="margin-right: 10px; text-decoration: none !important;">
    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind css" width="40" height="40"/>
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" style="margin-right: 10px; text-decoration: none !important;">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
  </a>
</div>

<br/>

## 🚀 Deployment Instructions

To deploy this AI-powered WhatsApp clone, follow these steps:

1. **Install Dependencies**  
   Run `npm install` to install all required dependencies.

2. **Start the Development Server**  
   Run `npm run dev` to start the development server.  
   Log in to Convex and create a new project when prompted.

3. **Set Up Clerk for Authentication**  
   Create an account on Clerk.  
   Retrieve the `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` from your Clerk dashboard.  
   Follow the steps [here](https://clerk.dev/docs) to obtain the `CLERK_ISSUER_URL`.  
   Add the `CLERK_ISSUER_URL` and other necessary keys to your Convex environment variables.

4. **Configure Environment Variables**  
   Add `CLERK_HOST_NAME` and `CLERK_WEBHOOK_SECRET` to your Convex environment variables.  
   Set up WebHooks in the Clerk dashboard for events like `user.created`, `user.updated`, `session.created`, and `session.ended` using the endpoint: `https://your-convex-url.convex.site/clerk`.

5. **Set Up OpenAI Integration**  
   Create an account on OpenAI.  
   Obtain your `OPENAI_API_KEY` and add it to your Convex environment variables.

6. **Set Up ZegoCloud for Video Calls**  
   Create a project on ZEGOCLOUD for voice and video calls.  
   Add `ZEGO_APP_ID` and `ZEGO_SERVER_SECRET` to your `.env.local` file.

7. **Run the Application**  
   Once all steps are completed, your AI-powered WhatsApp clone should be up and running.

<br/>

<div align="center">
  <h2>Thank You!</h2>
</div>
