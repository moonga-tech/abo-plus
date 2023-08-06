import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="header-nav">
        <nav className="flex justify-between p-7 px-28">
          <div className="logo">
            <Image
              className="relative"
              src="/images/logo.jpg"
              alt="Logo"
              width={60}
              height={60}
              priority
            />
          </div>
          <div className="nav-button">
            <button type="button" className="mx-8 rounded-sm px-5 border border-white py-2">Language</button>
            <button type="button" className="px-5 rounded-sm border border-red-600 bg-red-600 py-2">Sign In</button>
          </div>
        </nav>
        <div className="header-desciption text-center w-full">
          <h1 className="text-6xl font-semibold">Unlimited movies, TV show and more.</h1>
          <h3 className="text-xl my-2">Watch anything, anytime.</h3>
          <p className="my-3">Ready to watch? Enter your email to create or restart your membership.</p>
          <form action="/" method="post">
            {/* <input className="focus:ring-red-400 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 py-2 pl-5 ring-1 ring-slate-200 shadow-sm" type="email" aria-label="Email projects" placeholder="Email Address" /> */}
            <input type="email" name="email" id="email" className="py-2 pl-3 w-2/5 focus:ring-red-400 focus:outline-none appearance-none text-slate-900 placeholder-slate-400" placeholder="Email address" required/>
            <button type="submit" className="p-2 px-5 bg-red-600">Get Started</button>
          </form>
        </div>
      </header>
      <div className="features">
        <div className="row-one">
          <div className="text-col">
            <h1 className="text-5xl font-semibold">Enjoy on your TV.</h1>
            <p className="pt-5">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className="img-col">
          <Image
              src="/images/features/1.jpg"
              alt="Logo"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
        <div className="row-two">
          <div className="text-col">
            <h1 className="text-5xl font-semibold">Download your shows to watch offline</h1>
            <p className="pt-5">Save your favorites easily and always have something to watch.</p>
          </div>
          <div className="img-col">
            <Image
                src="/images/features/2.jpg"
                alt="Logo"
                width={200}
                height={200}
                priority
              />
          </div>
        </div>
        <div className="row-three">
          <div className="text-col">
              <h1 className="text-5xl font-semibold">Watch everywhere</h1>
              <p className="pt-5">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV</p>
            </div>
            <div className="img-col">
            <Image
                src="/images/features/3.jpg"
                alt="Logo"
                width={200}
                height={200}
                priority
              />
            </div>
        </div>
        <div className="row-four">
          <div className="text-col">
              <h1 className="text-5xl font-semibold">Create profiles for kids</h1>
              <p className="pt-5">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
            <div className="img-col">
            <Image
                src="/images/features/4.jpg"
                alt="Logo"
                width={200}
                height={200}
                priority
              />
            </div>
        </div>
      </div>
      <h1 className="font-semibold text-3xl text-center">Frequently Asked Questions</h1>
      <ul className="accordion">
        <li>
          <input type="radio" name="accordion" id="first" />
          <label htmlFor="first">What is ABO Plus?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam vero est molestias consectetur praesentium libero officia exercitationem possimus vitae, fuga facilis at commodi, expedita maiores, doloremque dolor placeat. Aliquam!</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="secord" />
          <label htmlFor="secord">How much does ABO plus cost?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam vero est molestias consectetur praesentium libero officia exercitationem possimus vitae, fuga facilis at commodi, expedita maiores, doloremque dolor placeat. Aliquam!</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="third" />
          <label htmlFor="third">Where can I watch?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam vero est molestias consectetur praesentium libero officia exercitationem possimus vitae, fuga facilis at commodi, expedita maiores, doloremque dolor placeat. Aliquam!</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="fourth" />
          <label htmlFor="fourth">How do I cancel?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam vero est molestias consectetur praesentium libero officia exercitationem possimus vitae, fuga facilis at commodi, expedita maiores, doloremque dolor placeat. Aliquam!</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="firth" />
          <label htmlFor="firth">What can I watch on ABO Plus?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam vero est molestias consectetur praesentium libero officia exercitationem possimus vitae, fuga facilis at commodi, expedita maiores, doloremque dolor placeat. Aliquam!</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="sixth" />
          <label htmlFor="sixth">Is ABO Plus good for kids?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam vero est molestias consectetur praesentium libero officia exercitationem possimus vitae, fuga facilis at commodi, expedita maiores, doloremque dolor placeat. Aliquam!</p>
          </div>
        </li>
      </ul>
      <div className="subscribe text-center mb-5">
        <small class="text-lg">Ready to watch? Enter your email to create or restart your membership.</small>
        <form action="/" method="post" className="mt-2">
          {/* <input className="focus:ring-red-400 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 py-2 pl-5 ring-1 ring-slate-200 shadow-sm" type="email" aria-label="Email projects" placeholder="Email Address" /> */}
          <input type="email" name="email" id="email" className="py-2 pl-3 w-2/5 focus:ring-red-400 focus:outline-none appearance-none text-slate-900 placeholder-slate-400" placeholder="Email address" required/>
          <button type="submit" className="p-2 px-5 bg-red-600">Get Started</button>
        </form>
      </div>
      <footer>
        <h1 className="text-2xl font-semibold mb-6">Questions? call +250-09-78-90-88</h1>
        <div className="row">
          <div className="col">
            <a href="">FAQ</a>
            <a href="">Investor Relations</a>
            <a href="">Privacy</a>
            <a href="">Speed Test</a>
          </div>
          <div className="col">
            <a href="">Help</a>
            <a href="">Jobs</a>
            <a href="">Cookies Preferences</a>
            <a href="">Legal Notices</a>
          </div>
          <div className="col">
            <a href="">Acoount</a>
            <a href="">Ways to watch</a>
            <a href="">Corporate Information</a>
            <a href="">Only on ABO Plus</a>
          </div>
          <div className="col">
            <a href="">Media Centre</a>
            <a href="">Terms of Use</a>
            <a href="">Contact Us</a>
          </div>
        </div>
        <button type="submit" className="p-2 px-5 border border-white-900 color-white">English </button>
        <p className="my-5">ABO-Plus Zed</p>
      </footer>
    </>
  )
}
