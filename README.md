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

### Adding plugins and dependencies
```
npm install @redux.js/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axi
os react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort esline

1. Install simple import sore
```
npm i -D eslint-plugin-simple-import -sort
```

2.  Add rule in '.eslint.cjs'
```
'simple-import-sort/imports' : 'error'
```

3. add simple-import sort plugin in '.eslint.cjs'
```
plugins: {
    ....,
      'simple-import-sort': {},
    }

4. To enable auto import sort on file save in vs code

-open 'settings.json'
-add the following config
```
"editor.codeActionsOnSave":{
    "source.fixAll.eslint" : true
}
```


