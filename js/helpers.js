$(document).ready(function() {

    var text;
    $('.person').click(function(){
        console.log(this);
        showBios(this);
    });
});


function showBios(data){
    var bios = new Object();

    bios["stephen"] = "Stephen Song<br>Computational Media<br>Startup Exchange consists of the greatest kids on campus—people who love what they do and hustle to get what they want. I'm the Director of Design and I enjoy helping exchangers with design, product development, and all the soft skills.<br>Interests:Design, Entrepreneurship, Media Studies, Coding, Freestyle Rap, Museums, Emojis 💯"
    bios["chris"] = "Chris Altonji<br>Computer Science<br>There is a community at Georgia Tech of talented kids who are extremely well connected to the Atlanta Startup Community, and extremely well connected to students across the country.  That community is Startup Exchange and it’s who I go to whenever I need to meet someone I don’t know and whenever I need to learn a new skill.  As Director of Operations I continue to create life changing connections between students and each other and between students and mentors.<br>Interests: Connecting young minds and wise minds, Web hacks, Human centered software, Surrealism"
    bios["indra"] = "Indra Sofian<br>Business/Engineering<br>I want to promote entrepreneurship on Georgia Tech's campus and inspire young people to dream big and change the world. For too long, people have failed to recognize their own potential and have not realized that they can do so much more. As the Director of Marketing, it is my task to take Startup Exchange's message across Georgia Tech to reach anyone with ambition and a drive to learn.<br>Interests: Entrepreneurship, Business, Marketing, Investing, Venture Capital, Graphic Design, Filmmaking, Education, Traveling, Beatboxing"
    bios["wesley"] = "Wesley Samples<br>Computer Science/Business<br>There is a community at Georgia Tech of kids that are so hyped about being self-starters and entrepreneurship. The hype is a beautiful platform to begin teaching them practical business skills, customer service and the reality of the business world. Startup Exchange is the perfect place to learn from the best and brightest of the world. Ideas, innovation and insight is what we come for and skills and relationships is what we leave with. What a beautiful community.<br>Interests:Idealism, helping people realize their potential/ability to affect change, customer service, filmmaking, traveling, design"


    if ($('#bio').is(":hidden")) {
        $('#bio').slideToggle('slow');
        console.log("potato");
    } else if ($(data).attr('id') == text) {
        $('#bio').slideToggle('slow');
        console.log("tomato");
    }

    text = $(data).attr('id');

    $('#bio').html(bios[text]);
}