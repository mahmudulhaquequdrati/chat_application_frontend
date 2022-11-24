import React from "react";
import "../src/assets/scss/app.scss";

function App() {
  return (
    <div class="auth-bg">
      <div class="container p-0">
        <div class="row justify-content-center g-0">
          <div class="col-xl-9 col-lg-8">
            <div class="authentication-page-content shadow-lg">
              <div class="d-flex flex-column h-100 px-4 pt-4">
                <div class="row justify-content-center">
                  <div class="col-sm-8 col-lg-6 col-xl-6">
                    <div class="py-md-5 py-4">
                      <div class="text-center mb-5">
                        <h3>Welcome Back !</h3>
                        <p class="text-muted">Sign in to continue to Vhato.</p>
                      </div>
                      <form action="index.html">
                        <div class="mb-3">
                          <label for="username" class="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="Enter username"
                          />
                        </div>

                        <div class="mb-3">
                          <div class="float-end">
                            <a href="auth-recoverpw.html" class="text-muted">
                              Forgot password?
                            </a>
                          </div>
                          <label for="userpassword" class="form-label">
                            Password
                          </label>
                          <div class="position-relative auth-pass-inputgroup mb-3">
                            <input
                              type="password"
                              class="form-control pe-5"
                              placeholder="Enter Password"
                              id="password-input"
                            />
                            <button
                              class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                              type="button"
                              id="password-addon"
                            >
                              <i class="ri-eye-fill align-middle"></i>
                            </button>
                          </div>
                        </div>

                        <div class="form-check form-check-info fs-16">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="remember-check"
                          />
                          <label
                            class="form-check-label fs-14"
                            for="remember-check"
                          >
                            Remember me
                          </label>
                        </div>

                        <div class="text-center mt-4">
                          <button class="btn btn-primary w-100" type="submit">
                            Log In
                          </button>
                        </div>
                        <div class="mt-4 text-center">
                          <div class="signin-other-title">
                            <h5 class="fs-14 mb-4 title">Sign in with</h5>
                          </div>
                          <div class="row">
                            <div class="col-6">
                              <div>
                                <button
                                  type="button"
                                  class="btn btn-soft-info w-100"
                                >
                                  <i class="mdi mdi-facebook"></i> Facebook
                                </button>
                              </div>
                            </div>
                            <div class="col-6">
                              <div>
                                <button
                                  type="button"
                                  class="btn btn-soft-danger w-100"
                                >
                                  <i class="mdi mdi-google"></i> Google
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>

                      <div class="mt-5 text-center text-muted">
                        <p>
                          Don't have an account ?{" "}
                          <a
                            href="auth-register.html"
                            class="fw-medium text-decoration-underline"
                          >
                            {" "}
                            Register
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-12">
                    <div class="text-center text-muted p-4">
                      <p class="mb-0">
                        &copy;
                        <script>
                          document.write(new Date().getFullYear())
                        </script>{" "}
                        Vhato. Crafted with{" "}
                        <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
