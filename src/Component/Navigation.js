import react from 'react';
import lwslogo from '../images/LWSBlog.svg'

const Navigation = () => {
    return (
        <nav class="py-4 border-b">
        <div class="navbar-container">
        <div class="logo">
        <a>
          <img src={lwslogo} alt="search" />
        </a>
      </div>

      <div class="auth-buttons">
        <button class="btn btn-primary">sign in</button>
        <button class="btn btn-outline">sign up</button>
      </div>
    </div>
  </nav>
    )
};
export default Navigation;