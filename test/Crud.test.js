const Crud = artifacts.require('Crud');

contract('Crud', () => {
  let crud = null;
  const name1 = 'Vitalik';
  const newName = 'Sun';

  before(async () => {
    crud = await Crud.deployed();
  })

  it('Should create an user', async () => {
    await crud.create(name1);
    const user = await crud.users(0);
    assert(user.id.toNumber() == 1 && user.name == name1);
  })

  it('Shound return the user', async () => {
    const user = await crud.read(1);
    assert(user[0].toNumber() == 1 && user[1] == name1);
  })

  it('Shound update the user', async () => {
    await crud.update(1, newName);
    const user = await crud.read(1);
    assert(user[1] == newName);
  })

  it('Shound NOT update an user which does not exist', async () => {
    try {
      await crud.update(2, newName);
    } catch (error) {
      assert(error.message.includes('User does not exist'));
      return;
    }
    assert(false);
  })

  it('Shound destroy the user', async () => {
    await crud.destroy(1);
    try {
      await crud.read(1);
    } catch (error) {
      assert(error.message.includes('User does not exist'));
      return;
    }
    assert(false);
  })

  it('Shound NOT destroy an user which does not exist', async () => {
    try {
      await crud.destroy(20);
    } catch (error) {
      assert(error.message.includes('User does not exist'));
      return;
    }
    assert(false);
  })


})
