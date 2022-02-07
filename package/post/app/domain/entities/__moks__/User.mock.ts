import DomainUser from "../Post";
import UserEmail from "../UserEmail";

/**
 * Manual Moks
 */
const email = new UserEmail("michaeljordan@nba.com");
const userAudienceMock = new DomainUser(
  "123456789",
  "Michael",
  "Jordan",
  "foto_perfil.jpg",
  1111,
  email,
  true,
  "King of NBA",
  "King of NBA",
  "M",
  "AUDIENCE",
  "Jupiter, Florida",
  "",
  "NBA",
  "",
  "+1111",
  true,
  false,
  "987654321"
);

const emailAdmin = new UserEmail("jessica@gmail.com");
const userAdminMock = new DomainUser(
  "987654321",
  "Jessica",
  "Elberg",
  "foto_perfil.jpg",
  8888,
  emailAdmin,
  true,
  "jessica1",
  "jessica1",
  "M",
  "ADMIN",
  "Caracas",
  "",
  "TNO radio",
  "",
  "+58",
  true,
  false,
  "987654321"
);

export default {
  userAudienceMock,
  userAdminMock,
};
