## Convex Remix Demo


#### Local
---

- Install dependencies
```sh
npm install
```

- Log into [convex](https://dashboard.convex.dev/) 

- Init convex project
```sh
npx convex dev
```

- Seed
```sh
npx convex import tasks sampleData.jsonl
```

- Create .env and copy CONVEX_URL from .env.local 

- Run
```sh
npm run dev
```

&nbsp;

#### Prod
---

- deploy convex to prod
```sh
npx convex deploy
```

- Go to convex project dashboard, tab to prod, go to data and create `tasks` table, copy in task data from dev

- Go to vercel and configure new project
    - override build commamd  
    ```sh 
    npx convex deploy --cmd 'remix build'
    ```
    - Set CONVEX_URL envvar to prod url produce when you deployed

&nbsp;

### Test Notes:
---
- Expect to see tasks on local, but not on a vercel deployment
- Error doesn't get caught server side, remix ErrorBoundary handles client