const form = document.createElement("form");

function resetPage() {
    window.location.href = "recolor-landing.php";
}

// Include sourced functions for generating filter styling
async function loadHexFilter() {
    const module = await import("./hexToFilter.js");
    module.submitSVG();
}

// Validate form
function includeHexFilter() {
    $("button#svgExecute").on("click", function() {
        if (!form.checkValidity()) {
            form.reportValidity();
        } else {
            loadHexFilter();
        }
    });
}

// Reusable create input function
function createInputElement(type, attributes) {
    const input = document.createElement("input");
    Object.assign(input, attributes, { type });
    return input;
}

// On click landing page button/generate recolor form
function recolorSVG() {
    Object.assign(form, {
        action: "",
        id: "recolorSVG",
        method: "post"
    });

    const span = document.createElement("span");
    span.className = "material-symbols-outlined";
    span.innerText = "cruelty_free";

    const colorLabel = document.createElement("label");
    colorLabel.textContent = "6-Digit Hex Color:";
    colorLabel.setAttribute("for", "colorInput");

    const colorInput = createInputElement("text", {
        id: "colorInput",
        name: "color",
        pattern: "[a-zA-Z0-9]{6}",
        placeholder: "000000",
        required: true
    });

    const SVGFilter = createInputElement("hidden", {
        id: "filter",
        name: "filter"
    });

    const trySVGBtn = document.createElement("button");
    Object.assign(trySVGBtn, {
        id: "svgExecute",
        innerText: "Try Color",
        name: "trySVG",
        type: "button"
    });

    const subSVGBtn = document.createElement("button");
    Object.assign(subSVGBtn, {
        id: "svgSubmit",
        innerText: "Submit",
        name: "submitSVG",
        type: "submit"
    });

    $("#content").append(form);
    form.append(span, colorLabel, colorInput, SVGFilter, trySVGBtn, subSVGBtn);

    $(".material-symbols-outlined").delay(1500).animate({ opacity: 1 }, 700);

    includeHexFilter();
}

function displayRecolorContent() {
    $(".buttons-container button").on("click", function() {
        $(".buttons-container").addClass("d-none");

        if (this.name === "item-svg") {
            recolorSVG();
        }
    });
}

$(document).ready(function() {
    displayRecolorContent();
});
