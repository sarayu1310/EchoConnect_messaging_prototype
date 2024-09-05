<p align="center">
  <strong>Name:</strong>Gosika Sarayu<br>
  <strong>Department:</strong> Department of Geology and Geophysics<br>
  <strong>University:</strong> IIT Kharagpur
</p>

<h1 align="center">EchoConnect</h1>

<p align="center">Make calls, share your screen and get a faster experience.</p>

<br/>

## 🛠 Tech Stack

<div>
  <p><a href="https://convex.dev/" target="_blank" rel="noreferrer"><strong>Convex</strong></a> - For the database, real-time events, and cloud functions.</p>
  <p><a href="https://nextjs.org/" target="_blank" rel="noreferrer"><strong>Next.js App Router</strong></a> - For the framework.</p>
  <p><a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer"><strong>ShadCN</strong></a> - For UI components.</p>
  <p><a href="https://docs.convex.dev/file-storage" target="_blank" rel="noreferrer"><strong>Convex File Storage</strong></a> - For storing images and videos.</p>
  <p><a href="https://www.zegocloud.com" target="_blank" rel="noreferrer"><strong>ZegoCloud</strong></a> - For video calls.</p>
  <p><a href="https://clerk.dev/" target="_blank" rel="noreferrer"><strong>Clerk</strong></a> - For user authentication.</p>
  <p><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><strong>Tailwind CSS</strong></a> - For styling.</p>
  <p><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><strong>TypeScript</strong></a> - Just to feel cool.</p>
</div>

<br/>

## 🚀 Deployment Instructions

To deploy this EchoConnect App, follow these steps:

1. *Install Dependencies*  
   Run `npm install` to install all required dependencies.

2. *Start the Development Server*  
   Run `npm run dev` to start the development server.  
   Log in to Convex and create a new project when prompted.

3. *Set Up Clerk for Authentication*  
   Create an account on Clerk.  
   Retrieve the `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` from your Clerk dashboard.  
   Follow the steps [here](https://clerk.dev/docs) to obtain the `CLERK_ISSUER_URL`.  
   Add the `CLERK_ISSUER_URL` and other necessary keys to your Convex environment variables.

4. *Configure Environment Variables*  
   Add `CLERK_HOST_NAME` and `CLERK_WEBHOOK_SECRET` to your Convex environment variables.  
   Set up WebHooks in the Clerk dashboard for events like `user.created`, `user.updated`, `session.created`, and `session.ended` using the endpoint: `https://your-convex-url.convex.site/clerk`.

5. *Set Up OpenAI Integration*  
   Create an account on OpenAI.  
   Obtain your `OPENAI_API_KEY` and add it to your Convex environment variables.

6. *Set Up ZegoCloud for Video Calls*  
   Create a project on ZEGOCLOUD for voice and video calls.  
   Add `ZEGO_APP_ID` and `ZEGO_SERVER_SECRET` to your `.env.local` file.

7. *Run the Application*  
   Once all steps are completed, your AI-powered WhatsApp clone should be up and running.

<br/>

## 🚧 To Be Implemented

- **Blue Tick**: Indicate read status for messages.
- **Search**: Implement functionality to search through messages and chats.
- **Delete Messages**: Enable users to delete individual messages.
- **Delete Chat**: Allow users to delete entire chat histories.
- **Filters**: Add filtering options for messages and chats.

## ⚠️ Disclaimer

The GPT-related features are currently non-functional due to a lack of credits on the OpenAI platform.
<br/>
