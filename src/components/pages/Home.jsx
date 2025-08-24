import React from 'react'

function Home() {
  return (
    <div>
		<section className="slider">
			<div className="hero-slider">
				<div className="single-slider" style={{ backgroundImage: "url('img/slider2.jpg')" }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="text">
									<h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
									<div className="button">
										<a href="#" className="btn">Get Appointment</a>
										<a href="#" className="btn primary">Learn More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="single-slider" style={{ backgroundImage: "url('img/slider.jpg')" }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="text">
									<h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
									<div className="button">
										<a href="#" className="btn">Get Appointment</a>
										<a href="#" className="btn primary">About Us</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="single-slider" style={{ backgroundImage: "url('img/slider3.jpg')" }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="text">
									<h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
									<div className="button">
										<a href="#" className="btn">Get Appointment</a>
										<a href="#" className="btn primary">Conatct Now</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>

		<section className="schedule">
			<div className="container">
				<div className="schedule-inner">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-12 ">
							<div className="single-schedule first">
								<div className="inner">
									<div className="icon">
										<i className="fa fa-ambulance"></i>
									</div>
									<div className="single-content">
										<span>Lorem Amet</span>
										<h4>Emergency Cases</h4>
										<p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
										<a href="#">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12">
							<div className="single-schedule middle">
								<div className="inner">
									<div className="icon">
										<i className="icofont-prescription"></i>
									</div>
									<div className="single-content">
										<span>Fusce Porttitor</span>
										<h4>Doctors Timetable</h4>
										<p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
										<a href="#">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 col-12">
							<div className="single-schedule last">
								<div className="inner">
									<div className="icon">
										<i className="icofont-ui-clock"></i>
									</div>
									<div className="single-content">
										<span>Donec luctus</span>
										<h4>Opening Hours</h4>
										<ul className="time-sidual">
											<li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
											<li className="day">Saturday <span>9.00-18.30</span></li>
											<li className="day">Monday - Thusday <span>9.00-15.00</span></li>
										</ul>
										<a href="#">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    <section className="Feautes section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>We Are Always Ready to Help You & Your Family</h2>
							<img src="img/section-img.png" alt="#" />
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-12">
						<div className="single-features">
							<div className="signle-icon">
								<i className="icofont icofont-ambulance-cross"></i>
							</div>
							<h3>Emergency Help</h3>
							<p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
						</div>
					</div>
					<div className="col-lg-4 col-12">
						<div className="single-features">
							<div className="signle-icon">
								<i className="icofont icofont-medical-sign-alt"></i>
							</div>
							<h3>Enriched Pharmecy</h3>
							<p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
						</div>
					</div>
					<div className="col-lg-4 col-12">
						<div className="single-features last">
							<div className="signle-icon">
								<i className="icofont icofont-stethoscope"></i>
							</div>
							<h3>Medical Treatment</h3>
							<p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<div id="fun-facts" className="fun-facts section overlay">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun">
							<i className="icofont icofont-home"></i>
							<div className="content">
								<span className="counter">3468</span>
								<p>Hospital Rooms</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun">
							<i className="icofont icofont-user-alt-3"></i>
							<div className="content">
								<span className="counter">557</span>
								<p>Specialist Doctors</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun">
							<i className="icofont-simple-smile"></i>
							<div className="content">
								<span className="counter">4379</span>
								<p>Happy Patients</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun">
							<i className="icofont icofont-table"></i>
							<div className="content">
								<span className="counter">32</span>
								<p>Years of Experience</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Home
