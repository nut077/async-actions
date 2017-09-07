export default {
  users: [
    { id: 1, name: 'ABC', email: 'abc@babelcoder.com' },
    { id: 2, name: 'DEF', email: 'def@babelcoder.com' },
    { id: 3, name: 'GHI', email: 'ghi@babelcoder.com' }
  ],
  articles: [
    {
      id: 1,
      title: '��Ŵ������Ǣ������ҡ ���� PurifyCSS',
      excerpt: '�� PurifyCSS ���͡�ͧ੾�� CSS �����ҹ��ԧ �µѴ��ǹ�����������͡� ������������Ŵ���Ǣ��',
      content: '�س���� Twitter Bootstrap �������? \n�繷���Һ�ѹ����� CSS Framework �����Ҩ��� Twitter Bootstrap, Zurb Foundation ��������з�� Pure CSS ����������͹�м���ҧ ���ԧ���Ǻ�����״�繪�ҧ��������ش���� \n������� HTML �ͧ����ա�����¡�� button ���� Bootstrap 㹡�èѴ����ѧ���',
      comments: [
        {
          id: 1,
          user: { id: 1, name: 'ABC', email: 'abc@babelcoder.com' },
          articleId: 1,
          message: 'Lorem Ipsum'
        },
        {
          id: 2,
          user: { id: 2, name: 'DEF', email: 'def@babelcoder.com' },
          articleId: 1,
          message: 'Lorem Ipsum'
        },
        {
          id: 3,
          user: { id: 3, name: 'GHI', email: 'ghi@babelcoder.com' },
          articleId: 1,
          message: 'Lorem Ipsum'
        }
      ]
    },
    {
      id: 2,
      title: 'GraphQL Best Practices: ���ҧ GraphQL ������ѧ�?',
      excerpt: '�繷���Шѡ��������Һ���ѷ�ѡ���˭�����������ա����ҹ GraphQL �ѹ�ҡ��� ��� Facebook (�˧��� �Դ�ͧ������������), Twitter, Github ��к���ѷ�����Ҩ�繤س',
      content: '�繷���Шѡ��������Һ���ѷ�ѡ���˭�����������ա����ҹ GraphQL �ѹ�ҡ��� ��� Facebook (�˧��� �Դ�ͧ������������), Twitter, Github ��к���ѷ�����Ҩ�繤س',
      comments: [
        {
          id: 4,
          user: { id: 1, name: 'ABC', email: 'abc@babelcoder.com' },
          articleId: 1,
          message: 'Lorem Ipsum'
        }
      ]
    }
  ],
  comments: [
    { id: 1, userId: 1, articleId: 1, message: 'Lorem Ipsum' },
    { id: 2, userId: 2, articleId: 1, message: 'Lorem Ipsum' },
    { id: 3, userId: 3, articleId: 1, message: 'Lorem Ipsum' },
    { id: 3, userId: 1, articleId: 2, message: 'Lorem Ipsum' }
  ]
}