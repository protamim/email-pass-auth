const SignIn = () => {
  return (
    <>
      <section className="my-9">
        <div className="container mx-auto px-5">
          <div>
            <div className="max-w-sm mx-auto bg-lime-100 p-6">
              <h2 className="text-center text-2xl mb-6">Sign In</h2>
              <form className="flex flex-col gap-4">
                <input
                  className="px-2 py-1 outline-none rounded-md"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
                <input
                  className="px-2 py-1 outline-none rounded-md"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <button className="bg-lime-50 px-4 py-1 mt-3 hover:bg-lime-500 hover:text-white">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
