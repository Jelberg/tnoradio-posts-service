import DomainPost from "../../../../package/user/app/domain/entities/Post";
import mock from "../../../../package/user/app/domain/entities/__moks__/Post.mock";

describe("Domain Post Tests ", () => {
  test("Function create", () => {
    let user = DomainPost.create(
      mock.userAdminMock.user_id,
      mock.userAdminMock.name,
      mock.userAdminMock.lastName,
      mock.userAdminMock.image,
      mock.userAdminMock.DNI,
      mock.userAdminMock.email,
      mock.userAdminMock.isActive,
      mock.userAdminMock.password,
      mock.userAdminMock.passwordConfirmation,
      mock.userAdminMock.gender,
      mock.userAdminMock.role,
      mock.userAdminMock.address,
      mock.userAdminMock.notes,
      mock.userAdminMock.company,
      mock.userAdminMock.department,
      mock.userAdminMock.phone,
      mock.userAdminMock.starred,
      mock.userAdminMock.deleted,
      mock.userAdminMock.updatedBy
    );
    //Verifying that the mock works
    expect(mock.userAudienceMock.name).toEqual("Michael");
    //Verifying user
    expect(user).not.toBeNull();
    expect(user).not.toBeNaN();
    expect(user).not.toBeUndefined();
    //Verifying DNI
    expect(user.DNI).toEqual(8888);
  });
});
