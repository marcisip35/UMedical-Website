const jobListingsDiv = document.getElementById("Job-Listings");
const jobsButton = document.getElementById("jobsButton");
let flip = false;
showJobListings();
jobsFunction();

function showJobListings() {
    jobsButton.addEventListener("click", function () {
        if (flip === false) {
            jobsButton.innerText = "hide job listings";
            jobListingsDiv.style.display = "block";
            flip = true;
        } else {
            jobsButton.innerText = "View Job Listings";
            jobListingsDiv.style.display = "none";
            flip = false;
        }
    });
}

function jobsFunction() {
    const jobListings = document.getElementById("Job-Listings");
    const jobTitleId = document.getElementById("jobTitle");
    const jobDescriptionId = document.getElementById("jobDescription");
    const jobLocationId = document.getElementById("jobLocation");
    const jobHospitalId = document.getElementById("jobHospital");
    const jobPositionTypeId = document.getElementById("jobPositionType");
    const jobs = [
        {
            jobTitle: "Registered Nurse (RN)",
            jobDescription: "Registered nurses (RNs) perform basic duties that include : - Treating patients, educating patients about mental and medical conditions, and providing advice and emotional support to patients’ and/or family members, running therapeutic groups, psychiatric crisis intervention, seclusion and restraint of patients. - RNs record patients’ medical histories and symptoms, help to perform diagnostic tests and analyze results, operate medical machinery, administer treatment and medications, and help with patient follow-up and rehabilitation. - RNs teach patients and their families how to manage their illness or injury, diet and exercise programs, and self-administration of medication and physical therapy. Other related...",
            jobLocation: "<span>Location: </span> Phoenix Arizona",
            jobHospital: "<span>Hospital: </span> Valley Vista Clinic",
            jobPositionType: "<span>Position Type: </span> Full-Time",
        },
        {
            jobTitle: "Cardiac Care Nurse (Night)",
            jobDescription: "We are seeking a Cardiac Care Nurse (Nights), internally referred to as our Cardiac Care Unit (CCU) Registered Nurse (RN) at Saint John Hospital a member of Prime Healthcare. The Cardiac Nurse plays a critical role in attending to patients with heart conditions, cardiac issues, and associated illnesses, provide tailored care to enhance recovery and enhance quality of life.   Bonus Options: Up to a $20,000 (Paid out as stipends...We are seeking a Cardiac Care Nurse (Nights), internally referred to as our Cardiac Care Unit (CCU) Registered Nurse (RN) at Saint John Hospital a member of Prime Healthcare. The Cardiac Nurse plays a critical role in attending to patients with heart conditions, cardiac issues, and associated illnesses, provide tailored care to enhance recovery and enhance quality of life.   Bonus Options: Up to a $20,000 (Paid out as stipends...",
            jobLocation: "<span>Location: </span> Phoenix Arizona",
            jobHospital: "<span>Hospital: </span> Valley Vista Clinic",
            jobPositionType: "<span>Position Type: </span> Part-Time",
        },
        {
            jobTitle: "Primary Care Physician",
            jobDescription: "The Physician will diagnosis, treat, and help with disease prevention and injury that commonly occur in the general population. May refer patient to specialist when needed for further diagnosis and treatment.",
            jobLocation: "<span>Location: </span> Phoenix Arizona",
            jobHospital: "<span>Hospital: </span> Valley Vista Clinic",
            jobPositionType: "<span>Position Type: </span> Full-Time",
        }
    ];

    createJobClass();

    function createJobClass() {
        for (let i = 0; i < jobs.length; i++) {
            const jobClass = `<div class="job">
                                <a id="jobTitle" href="">${jobs[i].jobTitle}</a>
                                <p id="jobDescription">${jobs[i].jobDescription}</p>
                            </div>
                            <div id="jobCategories">
                                <p id="jobLocation">${jobs[i].jobLocation}</p>
                                <p id="jobHospital">${jobs[i].jobHospital}</p>
                                <p id="jobPositionType">${jobs[i].jobPositionType}</p>
                            </div`;
            jobListings.innerHTML += jobClass;
        }
        const hideButton = document.createElement('button');
        hideButton.id = "hideButton";
        hideButton.textContent = "hide job listings";
        jobListings.appendChild(hideButton);

        const hideJobListings = document.getElementById("hideButton");
        hideJobListings.addEventListener("click", function(){
            jobListingsDiv.style.display = "none";
            flip = false;
            jobsButton.innerText = "View Job Listings";
        });
    }
}

//Mobile Integration
const partnerWithUs = document.getElementById("Partner-With-Us");
checkScreenWidth();
function checkScreenWidth() {
    if(window.innerWidth < 550){
        partnerWithUs.innerHTML = `<div class="right">
                        <img src="./assets/careers-image1.jpg">
                    </div>
                    <div class="left">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            fill="#1c274c" version="1.1" id="Capa_1" width="100px" viewBox="0 0 174.229 174.229"
                            xml:space="preserve">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <polygon points="74.726,165.527 74.732,165.516 74.72,165.516 " />
                                        <path
                                            d="M136.969,94.126c-7.514,0-14.504,2.26-20.374,6.107c-7.063-4.433-14.931-8.041-23.443-10.199 c13.523-9.097,22.834-27.023,22.834-43.178c0-22.789-18.486-41.272-41.266-41.272c-22.786,0-41.266,18.478-41.266,41.272 c0,16.155,9.311,34.081,22.834,43.178C23.952,98.23,0,126.302,0,147.096c0,12.294,37.357,18.432,74.714,18.426l-20.929-20.923 l17.622-42.6h-0.179L64.38,94.15c3.304,1.188,6.759,1.906,10.339,1.906c3.571,0,7.021-0.719,10.325-1.9l-6.848,7.843h-0.167 l17.619,42.594l-20.922,20.923c14.772,0,29.532-0.969,42.003-2.893c5.833,3.787,12.775,6.022,20.24,6.022 c20.545,0,37.26-16.715,37.26-37.26C174.235,110.841,157.514,94.126,136.969,94.126z M136.969,162.41 c-17.099,0-31.024-13.92-31.024-31.024c0-17.11,13.914-31.03,31.024-31.03s31.03,13.92,31.03,31.03 C168,148.49,154.074,162.41,136.969,162.41z" />
                                        <path
                                            d="M138.187,115.7c0.999,0,1.9-0.451,2.704-1.37c0.804-0.92,1.199-1.918,1.199-2.996c0-1.077-0.305-1.967-0.907-2.673 c-0.609-0.707-1.4-1.054-2.375-1.054s-1.863,0.493-2.679,1.479c-0.811,0.986-1.206,1.998-1.206,3.045 c0,1.06,0.292,1.912,0.877,2.576C136.384,115.371,137.182,115.7,138.187,115.7z" />
                                        <path
                                            d="M142.87,148.746c-1.139,0.81-2.106,1.218-2.923,1.218c-0.81,0-1.212-0.694-1.212-2.083c0-0.694,0.062-1.559,0.171-2.6 l0.986-11.29c0.426-4.408,0.64-6.771,0.64-7.051c0-3.324-1.103-4.98-3.295-4.98c-1.948,0-3.921,0.962-5.918,2.874 c-1.997,1.924-3.514,4.237-4.555,6.96l1.681,1.162c2.484-3.708,4.152-5.559,4.993-5.559c0.84,0,1.254,0.919,1.254,2.776 c0,0.688-0.036,1.468-0.115,2.308l-1.273,11.289c-0.311,3.143-0.462,5.383-0.462,6.711c0,1.333,0.304,2.447,0.913,3.343 c0.608,0.896,1.656,1.346,3.142,1.346c4.726,0,8.16-2.856,10.291-8.567l-1.498-1.041 C144.946,146.876,144.008,147.937,142.87,148.746z" />
                                    </g>
                                </g>
                            </g>

                        </svg>
                        <h1>Partner With Us</h1>
                        <p>Our commitment to our Hospital clients is to develop cost-effective and efficient hospitalist
                            programs that aim to improve quality and increase patient satisfaction. By partnering with
                            us, Hospitals can not only free up financial resources but can also have the confidence of
                            knowing that they have a partner that is equally committed to the quality and compliance
                            goals of the facility.
                        </p>
                        <a id="partnerContact" href="./contact.html">Contact Us</a>
                    </div>`;
    } else {
        partnerWithUs.innerHTML = `<div class="left">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            fill="#1c274c" version="1.1" id="Capa_1" width="100px" viewBox="0 0 174.229 174.229"
                            xml:space="preserve">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <polygon points="74.726,165.527 74.732,165.516 74.72,165.516 " />
                                        <path
                                            d="M136.969,94.126c-7.514,0-14.504,2.26-20.374,6.107c-7.063-4.433-14.931-8.041-23.443-10.199 c13.523-9.097,22.834-27.023,22.834-43.178c0-22.789-18.486-41.272-41.266-41.272c-22.786,0-41.266,18.478-41.266,41.272 c0,16.155,9.311,34.081,22.834,43.178C23.952,98.23,0,126.302,0,147.096c0,12.294,37.357,18.432,74.714,18.426l-20.929-20.923 l17.622-42.6h-0.179L64.38,94.15c3.304,1.188,6.759,1.906,10.339,1.906c3.571,0,7.021-0.719,10.325-1.9l-6.848,7.843h-0.167 l17.619,42.594l-20.922,20.923c14.772,0,29.532-0.969,42.003-2.893c5.833,3.787,12.775,6.022,20.24,6.022 c20.545,0,37.26-16.715,37.26-37.26C174.235,110.841,157.514,94.126,136.969,94.126z M136.969,162.41 c-17.099,0-31.024-13.92-31.024-31.024c0-17.11,13.914-31.03,31.024-31.03s31.03,13.92,31.03,31.03 C168,148.49,154.074,162.41,136.969,162.41z" />
                                        <path
                                            d="M138.187,115.7c0.999,0,1.9-0.451,2.704-1.37c0.804-0.92,1.199-1.918,1.199-2.996c0-1.077-0.305-1.967-0.907-2.673 c-0.609-0.707-1.4-1.054-2.375-1.054s-1.863,0.493-2.679,1.479c-0.811,0.986-1.206,1.998-1.206,3.045 c0,1.06,0.292,1.912,0.877,2.576C136.384,115.371,137.182,115.7,138.187,115.7z" />
                                        <path
                                            d="M142.87,148.746c-1.139,0.81-2.106,1.218-2.923,1.218c-0.81,0-1.212-0.694-1.212-2.083c0-0.694,0.062-1.559,0.171-2.6 l0.986-11.29c0.426-4.408,0.64-6.771,0.64-7.051c0-3.324-1.103-4.98-3.295-4.98c-1.948,0-3.921,0.962-5.918,2.874 c-1.997,1.924-3.514,4.237-4.555,6.96l1.681,1.162c2.484-3.708,4.152-5.559,4.993-5.559c0.84,0,1.254,0.919,1.254,2.776 c0,0.688-0.036,1.468-0.115,2.308l-1.273,11.289c-0.311,3.143-0.462,5.383-0.462,6.711c0,1.333,0.304,2.447,0.913,3.343 c0.608,0.896,1.656,1.346,3.142,1.346c4.726,0,8.16-2.856,10.291-8.567l-1.498-1.041 C144.946,146.876,144.008,147.937,142.87,148.746z" />
                                    </g>
                                </g>
                            </g>

                        </svg>
                        <h1>Partner With Us</h1>
                        <p>Our commitment to our Hospital clients is to develop cost-effective and efficient hospitalist
                            programs that aim to improve quality and increase patient satisfaction. By partnering with
                            us, Hospitals can not only free up financial resources but can also have the confidence of
                            knowing that they have a partner that is equally committed to the quality and compliance
                            goals of the facility.
                        </p>
                        <a id="partnerContact" href="./contact.html">Contact Us</a>
                    </div>
                    <div class="right">
                        <img src="./assets/careers-image1.jpg">
                    </div>`;
    }
}

window.addEventListener('resize', checkScreenWidth);


