import { Link } from "react-router-dom";

export default function ClassCard({ grade, subject }) {
  return (
    <div className="my-[-95px] mt-10 w-[238.75px] rounded-lg border-l-[5px] border-l-blue-500 px-7 py-7 shadow-sm transition hover:shadow-md">
      <Link to={`detail/${grade}/${subject}`}>
        <div className="group cursor-pointer">
          <h5 className="text-2xl font-medium text-gray-700  group-hover:underline group-hover:decoration-blue-500 ">
            {grade}
          </h5>
          <p className="mt-3 text-lg  text-gray-500   group-hover:underline group-hover:decoration-blue-500 ">
            {subject}
          </p>
        </div>
      </Link>
    </div>
  );
}

// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⢀⣀⣠⣤⣼⣿⣿⣿⣿⣿⣿⣿⣅⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣯⣽⣢⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡍⠲⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠉⠉⢩⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⢢⣈⠫⢄⠀⠀⠀⠀⠀⠀⢀⡄⠂⢄⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣽⣿⣿⣿⣿⣽⣿⣿⣿⣿⣷⡧⠀⠀⠀⠀⢀⠎⠀⠀⠀⢃⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣟⣣⠀⠀⠀⡎⠀⠀⠀⠀⠀⡆⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⡋⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡔⡄⠀⠁⠀⠀⠀⠀⠀⢰⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡇⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡇⢰⠇⠀⠀⠀⠀⠀⡘⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⣼⣼⣿⣿⠿⣿⣿⣿⡿⢹⣿⣿⣿⣿⣿⣿⡽⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠎⠦⡀⠀⠀⠀⢀⠇⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢢⣿⡇⣼⣧⣶⣿⣿⣿⠁⢸⢿⣿⣿⣿⣿⣿⣷⡘⣷⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠧⡙⠀⠑⢄⣀⠤⠂⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣟⣼⣿⣿⣿⣿⣿⣿⠀⠀⢛⣿⣿⣿⣿⣿⡿⣿⡬⠿⣾⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣿⣿⣿⣿⣿⣻⡆⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⣿⢻⣿⣿⣿⣿⣿⣿⣿⡏⠉⠉⠻⢿⣿⣿⣿⣿⣜⢿⣮⡙⠷⣦⣉⠓⢿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠤⠤⠤⠤⣀⠀⠘⠀⠀⣿⢸⢿⣿⣿⣿⣿⣿⠘⢿⠈⠁⠐⠄⠙⢟⢿⣿⣿⣦⡵⣟⣶⣽⣿⣿⣿⣿⣿⣿⣿⣿⣯⣾⣿⣿⣿⣿⣼⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢀⠎⠀⠀⠀⠀⠀⠀⠑⠆⠀⠀⣿⠀⣿⣿⣿⣿⣿⣿⣀⣬⣧⣖⣢⠄⠀⠀⠀⠈⠑⠈⠹⠿⠋⠘⣿⣿⣿⡆⣿⣿⣿⡏⡧⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠊⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠀⢿⠀⢹⣿⣿⣿⣿⣿⣿⡿⠻⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢮⠴⢃⣿⣿⣿⣿⣷⡟⣿⣿⣿⣿⣿⣟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠸⠀ohayou⠀⠀⠀⠀⠈⠄⠸⡆⡄⢿⣿⣿⣿⣿⣿⡻⢄⠙⢿⣻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⢻⣿⣿⣿⢈⣷⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀mastah⠀⠀⠀⢱⠐⠹⣵⠀⣿⣿⣿⣿⣿⢿⠦⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⡠⠞⠁⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠘⢦⣿⣿⣿⣿⣿⣮⣆⠀⠀⠀⠀⠀⠈⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢣⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠇ Go Coding !! ;⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣦⣤⡤⠀⠀⠀⠀⢀⣀⣀⣀⡀⠀⠀⢀⠴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⡆⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡅⠀⠀⠀⣾⠇⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠘⡀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⡀コーディング ⡜⠀⠀⠀⣸⡟⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣢⢄⠀⠀⢀⣤⣶⣿⢟⣿⣿⣿⣿⠰⢸⠾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢡⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠰⡀⠀⠀⠀⠀⠀⠀⢀⠜⠀⠀⠀⣰⡟⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠉⣫⢻⡿⠛⢁⢾⣿⣿⣿⡇⠇⡜⠀⡿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣻⡈⡆⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⠀⠀⠀⡠⠔⠁⠀⠀⠀⣰⡟⠀⠀⣟⣿⣿⣿⣿⣿⣿⠿⠛⠋⠉⠉⠛⠻⢗⠏⠏⢸⢇⢠⠟⣾⣿⣿⣿⣱⠊⠀⠀⡿⡞⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢸⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠈⠁⠀⠀⠀⠀⢀⡾⠋⠀⠀⣸⠇⣿⣹⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡈⠀⠀⠸⢻⠋⢸⣿⣿⣿⢿⠃⠀⠀⠀⣇⠗⢿⡇⢹⣿⣿⢿⣿⣿⣿⣿⣏⡆⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠛⠁⠀⠀⢠⡟⢀⣿⣿⣿⣿⣿⡟⣄⠀⠀⠀⠀⢠⣴⣧⣤⣄⣠⠣⣀⣿⣿⣿⣟⠎⠀⠀⠀⠀⣽⠀⠘⣿⠊⠫⡺⣷⣌⠉⡿⢿⣿⡇⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⠀⢀⡠⣾⣁⣼⣿⣿⣿⢹⣿⡇⠈⠑⠂⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⠇⡜⠘⡄⠀⠹⣧⠀⠈⠪⢙⢻⠷⠦⠿⣿⡄⠀⠀
// ⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⣀⠔⣒⣵⣾⣿⣿⣿⣿⣿⣿⡇⢸⣿⠀⠀⡇⠀⠀⠀⠀⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⢋⡼⠔⠀⠉⢄⡀⠙⣧⠀⣀⡴⠉⠉⠉⠉⠹⣷⡀⠀
// ⠀⠈⢏⣷⣮⣕⠢⠀⠀⠀⠀⢠⠞⢀⠔⢉⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣸⠃⠀⠠⠃⠀⠀⠀⢐⡨⠋⠀⣗⡄⢸⣿⣿⡿⡿⣿⡿⢣⠊⠀⠀⠀⠀⠀⠈⠑⠚⠻⣿⣄⣀⡀⠀⢀⣠⣿⣗⡀
// ⠀⠀⠀⢻⣿⣿⣿⣄⢂⠀⢠⣟⠔⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⠏⣀⠞⠀⠀⠀⠀⠀⠈⠀⠀⠀⣿⠀⢸⣿⣟⠀⢣⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠛⠊⢸⣿⡝
// ⠀⠀⠀⠀⢻⣿⣿⣿⣆⢃⢸⡏⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣾⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⢸⣿⡟⠀⠸⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣷
// ⠀⠀⠀⠀⠀⢻⣿⣿⣿⡞⡔⣣⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠘⠻⡼⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢻⣿
// ⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⢀⠇⠀⠀⠀⠑⠌⠢⠀⣀⣀⠀⠀⠀⠀⠀⠀⣽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⢸⣿
// ⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣰⣿⣿⣯⣆⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⢸⣿
// ⠀⠀⠀⠀⠀⠀⠀⠈⣏⠻⢿⣿⣿⣿⣿⣿⣿⡇⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠆⠀⢀⣠⢰⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡟⢸⡟
// ⠀⠀⠀⠀⠀⠀⠀⠀⢸⢇⠈⢿⣿⣿⣿⣿⣿⠁⢀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⡈⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⢠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⢁⡟⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠆⠈⢿⣿⣿⣿⡇⠀⢸⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⡎⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣰⣏⣀⣊⣀⣀
