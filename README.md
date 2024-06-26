# Yaxb-Website

Codebase for Public website, the code is generated using NextJS framework generated from DivJoy 

The final built code is generated to Static Website in the ##OUT ZIP## 
=======
=======
#Yaxb-Website

Codebase for Public website, the code is generated using NextJS framework generated from DivJoy

The final built code is generated to Static Website in the #OUT# folder
>>>>>>> 10c347f (Including header)

## 👉 Get Started
Install dependencies
```
npm install
```
Update your `.env` file with values for each environment variable
```
API_KEY=AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas
etc ...
```

Run the development server
```
npm run dev
```
When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack
This project uses the following libraries and services:
- Framework - [Next.js](https://nextjs.org)
- UI Kit - [Bulma](https://bulma.io)
- Newsletter - [Mailchimp](https://mailchimp.com)
- Contact Form - [Google Sheets](https://www.google.com/sheets/about/)
- Analytics - [Simple Analytics](https://simpleanalytics.com/?referral=divjoy)
- Hosting - TBD


## 📚 Guide

<details> <summary><b>Styles</b></summary> <p> You can edit Bulma SASS variables in the global stylesheet located at <code><a href="src/styles/global.scss">src/styles/global.scss</a></code>. Variables allow you to control global styles (like colors and fonts), as well as element specific styles (like button padding). Before overriding Bulma elements with custom style check the <a href="https://bulma.io/documentation">Bulma docs</a> to see if you can do what need by tweaking a SASS variable. </p> <p> Styles for each component are imported in the <code>src/styles/components</code> directory. For example, if any custom style is applied to the <code>Navbar</code> component you'll find it in <code>src/styles/components/Navbar.scss</code>. If you create a new component stylesheet make sure to also import it in <code>src/styles/components/index.scss</code>. We ensure custom styles are scoped to their component by prepending the classname with the component name (such as <code>.Navbar__brand</code>). This ensures styles never affect elements in other components. If styles need to be re-used in multiple components consider creating a new component that encapsulates that style and structure and using that component in multiple places. </p> </details>

<details>
<summary><b>Routing</b></summary>
<p>
  This project uses the built-in Next.js router and its convenient <code>useRouter</code> hook. Learn more in the <a target="_blank" href="https://github.com/zeit/next.js/#routing">Next.js docs</a>.

```js
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  // Get the router object
  const router = useRouter();

  // Get value from query string (?postId=123) or route param (/:postId)
  console.log(router.query.postId);

  // Get current pathname
  console.log(router.pathname);

  // Navigate with the <Link> component or with router.push()
  return (
    <div>
      <Link href="/about"><a>About</a></Link>
      <button onClick={(e) => router.push("/about")}>About</button>
    </div>
  );
}
```
</p>
</details>





<details>
<summary><b>Deployment</b></summary>
<p>
This project wasn't setup with a specific web host in mind. Please follow the Next.js <a href="https://nextjs.org/docs/deployment">deployment docs</a> to learn how to deploy your project to various hosts.
</p>
</details>

<details>
<summary><b>Other</b></summary>
<p>
  This project was created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, the React codebase generator. You can find more info in the <a href="https://docs.divjoy.com">Divjoy Docs</a>.
</p>
</details>
  
>>>>>>> 796100d (Initial commit. Public website hosted in godaddy.)
