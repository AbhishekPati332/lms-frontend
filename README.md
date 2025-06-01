# LMS Frontened

### Setup instruction

1. Clone the project 
```
git clone https://github.com/AbhishekPati332/lms-frontend.git
```

2. move into the directory
```
cd lms-frontend-hn
```

3. install dependencies
```
npm i
```

4. run the server
```
npm run dev
```

### Setup instruction  for tailwind

[Tail wind official instruction doc](https://tailwindcss.com/docs/installation)

1. install tailwindcss
```
npm install -D tailwindcss
```

2. Create tailwind config file
```
npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contain property
```
"./src/**/*.{js,jsx,ts,tsx}"
```

4. Add the tailwind directions at the top of the 'index.css' file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
