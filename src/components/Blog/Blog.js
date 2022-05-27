import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://i.ibb.co/26cggq1/kaitlyn-baker-v-ZJd-Yl5-JVXY-unsplash.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Blogs</h1>
          </div>
        </div>
      </div>
      <section className="blog-section px-12 mt-5">
        <div>
          <h2 className="text-3xl mt-5">
            How will you improve the performance of a React Application
          </h2>
          <p>
            When we create a rendered component, React creates a virtual DOM for
            its element tree in the component. Now, whenever the state of the
            component changes, React recreates the virtual DOM tree and compares
            the result with the previous render. It then only updates the
            changed element in the actual DOM. This process is called diffing.
            React uses the concept of a virtual DOM to minimize the performance
            cost of re-rendering a webpage because the actual DOM is expensive
            to manipulate. This is great because it speeds up the UI render
            time. However, this concept can also slow down a complex app if it’s
            not managed very well. What we can deduce here is that a state
            change in a React component causes a re-render. Likewise, when the
            state passes down to a child component as a prop, it re-renders the
            child and so on, which is fine because React must update the UI. The
            issue comes when the child components are not affected by the state
            change. In other words, they do not receive any prop from the parent
            component. React nonetheless re-renders these child components. So,
            as long as the parent component re-renders, all of its child
            components re-render regardless of whether a prop passes to them or
            not; this is the default behavior of React. Let’s quickly
            demonstrate this concept. Here, we have an App component holding a
            state and a child component:
          </p>
        </div>
        <div>
          <h2 className="text-3xl">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            Kinds of React State to Manage When we talk about state in our
            applications, it’s important to be clear about what types of state
            actually matter. There are four main types of state you need to
            properly manage in your React apps: Local state Global state Server
            state URL state Let's cover each of these in detail: Local (UI)
            state – Local state is data we manage in one or another component.
            Local state is most often managed in React using the useState hook.
            For example, local state would be needed to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled and the values of a form’s
            inputs. Global (UI) state – Global state is data we manage across
            multiple components. Global state is necessary when we want to get
            and update data anywhere in our app, or in multiple components at
            least. A common example of global state is authenticated user state.
            If a user is logged into our app, it is necessary to get and change
            their data throughout our application. Sometimes state we think
            should be local might become global. Server state – Data that comes
            from an external server that must be integrated with our UI state.
            Server state is a simple concept, but can be hard to manage
            alongside all of our local and global UI state. There are several
            pieces of state that must be managed every time you fetch or update
            data from an external server, including loading and error state.
            Fortunately there are tools such as SWR and React Query that make
            managing server state much easier. URL state – Data that exists on
            our URLs, including the pathname and query parameters. URL state is
            often missing as a category of state, but it is an important one. In
            many cases, a lot of major parts of our application rely upon
            accessing URL state. Try to imagine building a blog without being
            able to fetch a post based off of its slug or id that is located in
            the URL! There are undoubtedly more pieces of state that we could
            identify, but these are the major categories worth focusing on for
            most applications you build.
          </p>
        </div>
        <div>
          <h2 className="text-3xl">How does prototypical inheritance work?</h2>
          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__ Example In the given
            example, there are two objects ‘person’ and ‘GFGuser’. The object
            ‘GFGuser’ inherits the methods and properties of the object ‘person’
            and further uses them.
          </p>
        </div>
        <div>
          <h2 className="text-3xl">
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts
          </h2>
          <p>
            What is a Hook? A Hook is a special function that lets you “hook
            into” React features. For example, useState is a Hook that lets you
            add React state to function components. We’ll learn other Hooks
            later. When would I use a Hook? If you write a function component
            and realize you need to add some state to it, previously you had to
            convert it to a class. Now you can use a Hook inside the existing
            function component. We’re going to do that right now! What does
            calling useState do? It declares a “state variable”. Our variable is
            called count but we could call it anything else, like banana. This
            is a way to “preserve” some values between the function calls —
            useState is a new way to use the exact same capabilities that
            this.state provides in a class. Normally, variables “disappear” when
            the function exits but state variables are preserved by React.
          </p>
        </div>
        <div>
          <h2 className="text-3xl">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p>
            Create two array prefix and suffix of length n, i.e length of the
            original array, initialize prefix[0] = 1 and suffix[n-1] = 1 and
            also another array to store the product. Traverse the array from
            second index to end. For every index i update prefix[i] as prefix[i]
            = prefix[i-1] * array[i-1], i.e store the product upto i-1 index
            from the start of array. Traverse the array from second last index
            to start. For every index i update suffix[i] as suffix[i] =
            suffix[i+1] * array[i+1], i.e store the product upto i+1 index from
            the end of array Traverse the array from start to end. For every
            index i the output will be prefix[i] * suffix[i], the product of the
            array element except that element.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
