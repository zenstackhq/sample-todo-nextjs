<div align="center">
    <img src="https://github.com/zenstackhq/sample-todo-sveltekit/assets/16688722/df13f0ee-1d56-4a13-9a55-39e8779c6d9f" height="256">
    <h1>ZenStack SaaS Demo</h1>
    <a href="https://twitter.com/intent/tweet?text=Wow%20%40zenstackhq">
        <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fzenstackhq%2Fzenstack">
    </a>
    <a href="https://discord.gg/6HhebQynfz">
        <img src="https://img.shields.io/discord/1035538056146595961">
    </a>
</div>

# A Collaborative Todo Sample - ZenStack + Next.js

This project is a collaborative Todo app built with [Next.js](https://nextjs.org), [Next-Auth](nextauth.org), and [ZenStack](https://zenstack.dev).

In this fictitious app, users can be invited to workspaces where they can collaborate on todos. Public todo lists are visible to all members in the workspace.

See a live deployment at: https://zenstack-todo.vercel.app/.

## Features

-   User signup/signin
-   Creating workspaces and inviting members
-   Data segregation and permission control

## Implementation

-   Data model is located at `/schema.zmodel`.
-   An automatic CRUD API is mounted at `/api/model` by `pages/api/model/[...path].ts`.
-   [SWR](https://swr.vercel.app/) CRUD hooks are generated under `lib/hooks` folder.

## Running the sample

1. Setup a new PostgreSQL database

    You can launch a PostgreSQL instance locally, or create one from a hoster like [Supabase](https://supabase.com). Create a new database for this app, and set the connection string in .env file.

1. Install dependencies

    ```bash
    npm install
    ```

1. Generate server and client-side code from model

    ```bash
    npm run generate
    ```

1. Synchronize database schema

    ```bash
    npm run db:push
    ```

1. Start dev server

    ```bash
    npm run dev
    ```

For more information on using ZenStack, visit [https://zenstack.dev](https://zenstack.dev).
