import React from "react";

const Footer = () => {
  return (
    <footer style={{display:"flex",border:'1px solid black',position:"absolute",marginTop:"900px",width:"100%"}}>
      <div>
        <h2>The destination for tech & design</h2>
        <p>
          Founded on the principal that good design should be seamless and
          accessible to all; PROPER creates an evolving range of solutions and
          accessories that deliver great technology experiences, delivered right
          to your doorstep.
        </p>
      </div>
      <div>
        <h2>Studio Proper</h2>
        <p>
          Proper Consulting Proper x Architects Proper X Officeworks Your Brand
          on Our Products Verified Customer Reviews Apple Authorised Reseller
          Buy Now Pay Later NDIS support available Privacy Policy Newsletter
        </p>
      </div>
      <div>
        <h2>Newsletter</h2>
        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
        <input type="text" placeholder="Enter your email address"/>
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
