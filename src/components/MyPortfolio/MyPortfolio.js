import React from "react";

const MyPortfolio = () => {
  return (
    <section className="px-12">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg"
            class="max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">I am a Web Developer</h1>
            <p class="py-6">
              My name is Asraf Ali. Welcome to my personal page that I’ve
              designed to showcase my skills and expertise that I’ve accumulated
              over the year.
            </p>
            <button class="btn btn-primary">See More</button>
          </div>
        </div>
      </div>

      <div class="hero min-h-screen rounded-lg shadow-2xl mt-5">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://us.123rf.com/450wm/artursz/artursz2003/artursz200322279/142800989-text-sign-showing-about-me-business-photo-showcasing-telling-someone-list-of-your-good-and-bad-prope.jpg?ver=6"
            class="max-w-md "
          />
          <div>
            <h1 className="text-3xl">About Me</h1>
            <p>
              I like to call myself “a passionate computer science Student and
              Web developer”.
            </p>
            <br />
            <p>
              I made lot of videos on different subjects. My first priority is
              making the subject more interesting and give you a clear
              understanding so you can feel it and don’t get bore.
            </p>
            <ul>
              <li>Name: Mohammad Asraf Ali</li>
              <li>Email: asraf.bookaand@gmail.com</li>
              <li>Phone: 01730593130</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
            <button class="btn btn-primary">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
