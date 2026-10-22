const maxEC = 60
let earnedEC = 0


function updateProgress() {
    earnedEC = 0;

    for (let i = 1; i <= 12; i++) {
        const grade = document.getElementById("grade" + i);

        if (grade.classList.contains("result-passed")) {
            earnedEC += 5;
        }
    }

    const percentage = (earnedEC / maxEC) * 100;

    document.getElementById("ec").innerHTML =
        earnedEC + " / " + maxEC + " EC";

    document.getElementById("progressfill").style.width =
        percentage + "%";
}
    
function setGradeStatus(gradeId, status, ecId) {
    const grade = document.getElementById(gradeId);
    const ec = document.getElementById(ecId);

    grade.classList.remove(
        "no-result",
        "result-passed",
        "result-resit",
        "result-failed"
    );

    grade.classList.add(status);

    if (status === "result-passed") {
        ec.innerHTML = "5/5";
        grade.innerHTML = "passed";
    } else if (status === "no-result") {
        ec.innerHTML = "-/5";
        grade.innerHTML = "No result";
    }

    updateProgress();
}

setGradeStatus("grade1", "no-result", "ec1")
setGradeStatus("grade2", "no-result", "ec2")
setGradeStatus("grade3", "no-result", "ec3")
setGradeStatus("grade4", "no-result", "ec4")
setGradeStatus("grade5", "no-result", "ec5")
setGradeStatus("grade6", "no-result", "ec6")
setGradeStatus("grade7", "no-result", "ec7")
setGradeStatus("grade8", "no-result", "ec8")
setGradeStatus("grade9", "no-result", "ec9")
setGradeStatus("grade10", "no-result", "ec10")
setGradeStatus("grade11", "no-result", "ec11")
setGradeStatus("grade12", "no-result", "ec12")


