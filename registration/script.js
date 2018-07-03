// Registration checklist
(function() {
    var stepsNodeList = document.querySelectorAll(".checklist .step")
    var steps = Array.from(stepsNodeList);
    var LS_CHECKED_PREFIX = "reg-checklist-checked-step-";

    steps.forEach(function(step, index) {

        // Set initial checkbox state
        if (localStorage.getItem(LS_CHECKED_PREFIX + index) === "true") {
            step.dataset.complete = "true";
        }

        // Enable checkbox toggle
        var icon = step.querySelector(".icon");
        icon.addEventListener("click", function (event) {
            var checked = (step.dataset.complete === "false" ? "true" : "false");
            step.dataset.complete = checked;
            localStorage.setItem(LS_CHECKED_PREFIX + index, checked);
            event.preventDefault();
        }, false);

        // Enable detail to be toggled
        var detailLink = step.querySelector(".show-detail");
        var detailDiv = step.querySelector(".step-details");
        if (detailLink != null) {
            detailLink.addEventListener("click", function (event) {
                var showingDetails = (step.dataset.showingDetails === "false" ? "true" : "false");
                step.dataset.showingDetails = showingDetails;
                event.preventDefault();
            }, false);
        }
    });
})();
