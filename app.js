const {
  sequelize, User, Post, Author, Book, Student, Course, Order, Item,
} = require('./models');
const q = require('./queries');

async function seed() {
  // 3 пользователя, у Carol постов нет; Bob неактивен
  const alice = await User.create({ name: 'Alice', email: 'a@x.com' });
  const bob = await User.create({ name: 'Bob', email: 'b@x.com', isActive: false });
  await User.create({ name: 'Carol', email: 'c@x.com' });

  await Post.bulkCreate([
    { title: 'A1', publishedAt: '2023-05-10', status: 'published', authorId: alice.id },
    { title: 'A2', publishedAt: '2024-02-01', status: 'published', authorId: alice.id },
    { title: 'A3', publishedAt: '2022-03-01', status: 'draft', authorId: alice.id },
    { title: 'B1', publishedAt: '2023-08-15', status: 'published', authorId: bob.id },
    { title: 'B2', publishedAt: '2021-01-01', status: 'archived', authorId: bob.id },
  ]);

  // 3 автора, у Tolstoy книг нет
  const pushkin = await Author.create({ firstName: 'Alexander', lastName: 'Pushkin', country: 'Russia' });
  const orwell = await Author.create({ firstName: 'George', lastName: 'Orwell', country: 'UK' });
  await Author.create({ firstName: 'Leo', lastName: 'Tolstoy', country: 'Russia' });
  await Book.bulkCreate([
    { title: 'Eugene Onegin', year: 1833, genre: 'poem', authorId: pushkin.id },
    { title: '1984', year: 1949, genre: 'dystopia', authorId: orwell.id },
    { title: 'Animal Farm', year: 1945, genre: 'satire', authorId: orwell.id },
  ]);

  // 2 студента, курсы с разной кредитностью
  const s1 = await Student.create({ name: 'Ivan', group: 'G1' });
  const s2 = await Student.create({ name: 'Maria', group: 'G2' });
  const math = await Course.create({ title: 'Math', credits: 5 });
  const physics = await Course.create({ title: 'Physics', credits: 4 });
  const pe = await Course.create({ title: 'PE', credits: 2 });
  await s1.addCourses([math, physics, pe]);
  await s2.addCourses([pe]);

  // 2 заказа с товарами
  const o1 = await Order.create({ number: 'ORD-1' });
  const o2 = await Order.create({ number: 'ORD-2', status: 'paid' });
  await Item.bulkCreate([
    { productName: 'Honey', quantity: 3, price: 10.5, orderId: o1.id },
    { productName: 'Jar', quantity: 5, price: 2.0, orderId: o1.id },
    { productName: 'Spoon', quantity: 1, price: 1.0, orderId: o1.id },
    { productName: 'Tea', quantity: 1, price: 7.0, orderId: o2.id },
  ]);
}

const show = (title, data) =>
  console.log(`\n=== ${title} ===\n` + JSON.stringify(data, null, 2));

(async () => {
  await sequelize.sync({ force: true });
  await seed();

  show('Задание 1', await q.getUsersWithRecentPosts());
  show('Задание 2', await q.getAllAuthorsIncludingEmpty());
  show('Задание 3', await q.getStudentsInAdvancedCourses());
  show('Задание 4', await q.getOrdersWithBulkItems());
  show('Задание 5', await q.getActiveUsersWithPublishedPosts());

  await sequelize.close();
})();
