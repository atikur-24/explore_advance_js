const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10: 00 PM",
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting already schedule!"));
    }
});

const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
};

async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calender = await addToCalendar(meetingDetails);
        console.log(calender);
    } catch (error) {
        console.log(error.message);
    }
}

myMeeting();
