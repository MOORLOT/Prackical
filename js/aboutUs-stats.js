var skills0 = [
    {"name": "Іноземна мова: Англійська", "width": 83},
    {"name": "SQL", "width": 75},
    {"name": "Java", "width": 72},
    {"name": "Kotlin", "width": 70},
    {"name": "HTML + CSS", "width": 87},
    {"name": "C++", "width": 35}
  ];

  var skills_html = "";
  skills0.forEach(function (item, index) {

    skills_html += `
            <div>
                <div class="status_bar_a">${item.name}</div>
                <div class="status_bar">
                    <div style="width: ${item.width}%"></div>
                </div>
            </div>
            `;
  });

  var skillsDiv0 = document.getElementById('skills-0');
  skillsDiv0.innerHTML = skills_html;

  var skills1 = [
    {"name": "Іноземна мова: Англійська", "width": 75},
    {"name": "Photoshop", "width": 90},
    {"name": "Figma", "width": 85},
    {"name": "Illustrator", "width": 75},
    {"name": "HTML + CSS", "width": 50},
    {"name": "After Effects", "width": 35}
  ];
  skills_html = "";
  skills1.forEach(function (item, index) {
    skills_html += `
            <div>
                <div class="status_bar_a">${item.name}</div>
                <div class="status_bar">
                    <div style="width: ${item.width}%"></div>
                </div>
            </div>
            `;
  });

  var skillsDiv1 = document.getElementById('skills-1');
  skillsDiv1.innerHTML = skills_html;