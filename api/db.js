export default {
  articles: [
    {
      id: 1,
      title: '��Ŵ������Ǣ������ҡ ���� PurifyCSS',
      excerpt: '�� PurifyCSS ���͡�ͧ੾�� CSS �����ҹ��ԧ �µѴ��ǹ�����������͡� ������������Ŵ���Ǣ��',
      content: '�س���� Twitter Bootstrap �������? \n�繷���Һ�ѹ����� CSS Framework �����Ҩ��� Twitter Bootstrap, Zurb Foundation ��������з�� Pure CSS ����������͹�м���ҧ ���ԧ���Ǻ�����״�繪�ҧ��������ش���� \n������� HTML �ͧ����ա�����¡�� button ���� Bootstrap 㹡�èѴ����ѧ���',
      authorId: 1,
    },
    {
      id: 2,
      title: 'GraphQL Best Practices: ���ҧ GraphQL ������ѧ�?',
      excerpt: '�繷���Шѡ��������Һ���ѷ�ѡ���˭�����������ա����ҹ GraphQL �ѹ�ҡ��� ��� Facebook (�˧��� �Դ�ͧ������������), Twitter, Github ��к���ѷ�����Ҩ�繤س',
      content: '�繷���Шѡ��������Һ���ѷ�ѡ���˭�����������ա����ҹ GraphQL �ѹ�ҡ��� ��� Facebook (�˧��� �Դ�ͧ������������), Twitter, Github ��к���ѷ�����Ҩ�繤س',
      authorId: 1,
    }
  ],
  users: [
    {
      id: 1,
      name: 'BabelCoder',
      email: 'babelcoder@gmail.com',
      isAdmin: true,
      password: '$2a$12$.rjS5eXZpVo3aC2TuRsV0.8qzBOVPM01zguiMTKwb1BYxIVR7PtQS'
    },
    {
      id: 2,
      name: 'Somchai',
      email: 'somchai@haha.com',
      isAdmin: false,
      password: '$2a$12$.rjS5eXZpVo3aC2TuRsV0.8qzBOVPM01zguiMTKwb1BYxIVR7PtQS'
    }
  ],
  comments: [
    { id: 1, userId: 1, articleId: 1, message: 'Lorem Ipsum' },
    { id: 2, userId: 2, articleId: 1, message: 'Lorem Ipsum' },
    { id: 3, userId: 1, articleId: 2, message: 'Lorem Ipsum' }
  ]
}