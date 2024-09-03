document.addEventListener("DOMContentLoaded", () => {
    const genderSelect = document.getElementById("Gender");
    const languageSelect = document.getElementById("Language");
    const locationSelect = document.getElementById("Location");
    const specialtySelect = document.getElementById("Specialty");
    const searchInput = document.getElementById("Search-Doctors");
    const resetButton = document.getElementById("Reset");

    const doctors = document.querySelectorAll(".doctors li");

    const filterDoctors = () => {
        const selectedGender = genderSelect.value.toLowerCase();
        const selectedLanguage = languageSelect.value.toLowerCase();
        const selectedLocation = locationSelect.value.toLowerCase();
        const selectedSpecialty = specialtySelect.value.toLowerCase();
        const searchQuery = searchInput.value.toLowerCase();

        doctors.forEach(doctor => {
            const doctorName = doctor.querySelector('h1').textContent.toLowerCase();
            const [doctorGender, doctorLanguage, doctorLocation, doctorSpecialty] = doctor.id.split(" ");

            const matchesGender = selectedGender === "none" || selectedGender === doctorGender;
            const matchesLanguage = selectedLanguage === "none" || selectedLanguage === doctorLanguage;
            const matchesLocation = selectedLocation === "none" || selectedLocation === doctorLocation;
            const matchesSpecialty = selectedSpecialty === "none" || selectedSpecialty === doctorSpecialty;
            const matchesSearch = !searchQuery || doctorName.includes(searchQuery);

            if (matchesGender && matchesLanguage && matchesLocation && matchesSpecialty && matchesSearch) {
                doctor.style.display = "block";
            } else {
                doctor.style.display = "none";
            }
        });
    };

    // Function to get query parameter by name
    const getQueryParam = (param) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    };

    // Check if the 'specialty' query parameter is present
    const specialtyParam = getQueryParam("specialty");
    if (specialtyParam) {
        specialtySelect.value = specialtyParam;
    }

    genderSelect.addEventListener("change", filterDoctors);
    languageSelect.addEventListener("change", filterDoctors);
    locationSelect.addEventListener("change", filterDoctors);
    specialtySelect.addEventListener("change", filterDoctors);
    searchInput.addEventListener("input", filterDoctors);

    resetButton.addEventListener("click", () => {
        genderSelect.value = "none";
        languageSelect.value = "none";
        locationSelect.value = "none";
        specialtySelect.value = "none";
        searchInput.value = "";
        doctors.forEach(doctor => {
            doctor.style.display = "block";
        });
    });

    // Apply the filter when the page loads
    filterDoctors();
});
