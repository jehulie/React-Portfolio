import classes from './Contact.module.css'
import Form from './Form';

const Contact = () => {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel Free to Contact Me!
              </p>
              <h3>
              Click <a href='https://drive.google.com/file/d/12sMoHs1Y7hP33GC-tWmo7VLz82YVgr_q/view?usp=sharing' target="_blank">HERE</a> for my resume. <br /><br />
              </h3>
            </div>
            <Card>
                <Form />
            </Card>
          </div>
        </section>
        );
  }

  export default Contact