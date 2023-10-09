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
              aria-describedby="helpId"
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
              type="text"
              name="password"
              id="password"
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
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
