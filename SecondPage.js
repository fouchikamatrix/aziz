
import React from 'react';
import { Link } from 'react-router-dom';

function SecondPage() {
  return (
    <div>
      <Link to="/">
        <button>page 2</button>
      </Link>
    </div>
  );
}

export default SecondPage;
