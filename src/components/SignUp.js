const SignUp = () => {
  return (
    <div className="row">
      <div className="col-sm-6 offset-3">
        <form>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder=""
              pattern="[A-Za-z]{3,}"
              title="Please enter at least 3 alphabetical characters"
              required
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              className="form-control"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$"
              title="Password must be at least 8 characters long and include uppercase, lowercase, digits, and special characters."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
