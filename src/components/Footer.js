import React from "react";

export default function Footer() {
  return (
    //icons containing links to social media etc
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1;" }}
      >
        {/* <!-- Grid container --> */}
        <div className="container pt-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/reiken-stuart-2273732a4/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i classNames="fab fa-linkedin"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/13rstuart7"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            RS-Code Solutions
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
}

// import React from "react";

// export default function Footer() {
//   return (
//     //react fragments - one block
//     <>
//       {/* <!-- Footer --> */}
//       <footer className="text-center text-lg-start bg-light text-muted">
//         {/* <!-- Section: Social media --> */}
//         <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//           {/* <!-- Left --> */}
//           <div className="me-5 d-none d-lg-block">
//             <span>Get connected with me on social networks:</span>
//           </div>
//           {/* <!-- Left -->

//     <!-- Right --> */}
//           <div>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-google"></i>
//             </a>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-github"></i>
//             </a>
//           </div>
//           {/* <!-- Right --> */}
//         </section>
//         {/* <!-- Section: Social media --> */}

//         {/* <!-- Section: Links  --> */}
//         <section className="">
//           <div className="container text-center text-md-start mt-5">
//             {/* <!-- Grid row --> */}
//             <div className="row mt-3">
//               {/* <!-- Grid column --> */}
//               <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
//                 {/* <!-- Content --> */}
//                 <h6 className="text-uppercase fw-bold mb-4">
//                   <i className="fas fa-gem me-3"></i>LauraKam Coding Solutions
//                 </h6>
//                 <p>
//                   Let's solve real-world problems, with smart, cost-effective
//                   solutions.
//                 </p>
//               </div>
//               {/* <!-- Grid column --> */}

//               {/* <!-- Grid column --> */}
//               <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//                 {/* <!-- Links --> */}
//                 <h6 className="text-uppercase fw-bold mb-4">Products</h6>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     React
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     MERN
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Node JS
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Express JS
//                   </a>
//                 </p>
//               </div>
//               {/* <!-- Grid column --> */}

//               {/* <!-- Grid column --> */}
//               <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
//                 {/* <!-- Links --> */}
//                 <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Github
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Projects
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Orders
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Help
//                   </a>
//                 </p>
//               </div>
//               {/* <!-- Grid column -->

//         <!-- Grid column --> */}
//               <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
//                 {/* <!-- Links --> */}
//                 <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
//                 <p>
//                   <i className="fas fa-home me-3"></i> Birmingham, B93, UK
//                 </p>
//                 <p>
//                   <i className="fas fa-envelope me-3"></i>
//                   laura_ek@yahoo.co.uk
//                 </p>
//                 <p>
//                   <i className="fas fa-phone me-3"></i> + 01 234 567 88
//                 </p>
//                 <p>
//                   <i className="fas fa-print me-3"></i> + 01 234 567 89
//                 </p>
//               </div>
//               {/* <!-- Grid column --> */}
//             </div>
//             {/* <!-- Grid row --> */}
//           </div>
//         </section>
//         {/* <!-- Section: Links  --> */}

//         {/* <!-- Copyright --> */}
//         <div
//           className="text-center p-4"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//         >
//           © 2021 Copyright: RSSolutions, made with:
//           <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
//             MDBootstrap.com
//           </a>
//         </div>
//         {/* <!-- Copyright --> */}
//       </footer>
//       {/* <!-- Footer --> */}
//     </>
//   );
// }
