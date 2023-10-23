const Login = () => {
  return (
    <div className="row">
      <div className="col-sm-6 offset-3">
        <form>
          <div class="mb-3">
            <label for="" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
            />
            <small id="helpId" class="text-muted">
              {" "}
              your email
            </small>
          </div>

          <div class="mb-3">
            <label for="" class="form-label">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
            />
            <small id="helpId" class="text-muted">
              Your password
            </small>
          </div>

          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
