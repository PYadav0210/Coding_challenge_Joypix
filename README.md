# Fullstack Next JS Project with Database connected using Supabase

## Overview

This project is a simple web application that allows users to create and display discussion snippets. It uses Next.js, Tailwind CSS, Supabase (PostgreSQL), and nyxbui.design components to provide a functional and stylish interface.

## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Project Structure](#project-structure)
3. [Database Setup](#database-setup)
4. [Frontend Development](#frontend-development)
5. [Push to GitHub](#push-to-github)
6. [Additional Notes](#additional-notes)

## Setup Instructions

### Prerequisites

Ensure you have the following installed:
- Node.js (v18.x or later)
- npm or yarn
- Git

### Clone the Repository

First, clone the base project repository:

```bash
git clone https://github.com/company-recruitment/coding-challenge.git
cd coding-challenge

### Install Dependencies

Install the project dependencies:

npm install

### Set Up Supabase

1. *Create a Supabase Account:*
   - Go to [Supabase](https://supabase.com) and sign up.
   - Create a new project and note the API URL and anon key.

2. *Create Database Table:*
   - Go to the Supabase dashboard.
   - Create a new table named 'snippets' with the following columns:
     - id (UUID, Primary Key, Default: gen_random_uuid())
     - content (Text, Not Null)
     - created_at (Timestamp, Default: now())
     - user (Text, Not Null)

3. *Configure Environment Variables:*
   - Create a .env.local file in the root directory and add your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://qgkubtlnwoinkvqiabia.supabase.co
NEXT_PUBLIC_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFna3VidGxud29pbmt2cWlhYmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3NDI0ODEsImV4cCI6MjAzOTMxODQ4MX0.qnJR-KrHb0eBL8jwTpbYEjiAN-J8mcGYYerZV7qxlhc
```
     

## Project Structure

- **pages/index.tsx**: Main page that displays the form and list of snippets.
- **components/ui/**: Contains reusable UI components like Button, Textarea, and ShineBorder.
- **supabaseClient.ts**: Initializes the Supabase client for database interactions.

## Database Setup

1. *Initialize Supabase Client:*

   Create supabaseClient.ts to initialize the Supabase client:

   
   import { createClient } from '@supabase/supabase-js';

   export const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.NEXT_PUBLIC_SUPABASE_KEY!
   );
   

2. *Database Schema:*

   Ensure your snippets table is created with the necessary columns.

## Frontend Development

### Adding Style (NYXB UI)
 
1. *Style Components:*

   Utilize Tailwind CSS and nyxbui.design components for styling. Adjust the classes as needed to improve visual appeal.
   Firstly, we need to build the nyxb UI in our project in the following way:

   ```
   npx nyxbui@latest init
   ```
   And then, we have used buttons and text area using the following command:
    ```
    npx nyxbui@latest add button
    npx nyxbui@latest add textarea
     ```
   And in the code, then these elements can be imported.
 
## Push to GitHub

### Initialize Git and Add Remote

If your project isn’t already a Git repository:

git init
git remote add origin https://github.com/PYadav0210/Coding_challenge_Joypix

### Add, Commit, and Push

1. *Add All Files to Staging:*

   
   git add .
   

2. *Commit Changes:*

   
   git commit -m "Initial commit with project setup and UI enhancements"
   

3. *Push to Remote Repository:*

   If the remote repository has no existing history:

   
   git push -u origin main
   

Thank you for setting up and contributing to the project!
```
