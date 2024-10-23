/**
 * YouTube: TrungQuanDev - Một Lập Trình Viên
 * Created by trungquandev.com's author on Jun 28, 2023
 */
export const mockData = {
  board: {
    _id: 'board-id-01',
    title: 'ThanhAnDEV practicing',
    description: 'Pro MERN stack Course',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-01',
        title: 'To Do Column 01',
        cardOrderIds: [
          'card-id-01',
          'card-id-02',
          'card-id-03',
          'card-id-04',
          'card-id-05',
          'card-id-06',
          'card-id-07'
        ],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 01',
            description: 'Markdown Syntax (sẽ ở khóa nâng cao nhé)',
            cover:
              'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/349314272_792023842246959_4240143555096362812_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGyTjL2FNdHOuH0TOP3a0frs0t9FpW-2WCzS30Wlb7ZYP6vN4YLS0liMXyVzLxc8_Mc8_wvfDykSi2adf1kev2M&_nc_ohc=F-Jh0Ft4lGUQ7kNvgFhthqs&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AYjHi1pXxT6AjlGQkoPuY3q&oh=00_AYBfG6Fu0V-q_ainJIavIjltV-T0GBRUHsaFECQtDEGJkA&oe=671E45C3',
            memberIds: ['test-user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: [
              'test attachment 01',
              'test attachment 02',
              'test attachment 03'
            ]
          },
          {
            _id: 'card-id-02',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 02',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          },
          {
            _id: 'card-id-03',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 03',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          },
          {
            _id: 'card-id-04',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 04',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          },
          {
            _id: 'card-id-05',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 05',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          },
          {
            _id: 'card-id-06',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 06',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          },
          {
            _id: 'card-id-07',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 07',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          }
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-01',
        title: 'Inprogress Column 02',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          {
            _id: 'card-id-08',
            boardId: 'board-id-01',
            columnId: 'column-id-02',
            title: 'Title of card 08',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          },
          {
            _id: 'card-id-09',
            boardId: 'board-id-01',
            columnId: 'column-id-02',
            title: 'Title of card 09',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          },
          {
            _id: 'card-id-10',
            boardId: 'board-id-01',
            columnId: 'column-id-02',
            title: 'Title of card 10',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          }
        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-01',
        title: 'Done Column 03',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13'],
        cards: [
          {
            _id: 'card-id-11',
            boardId: 'board-id-01',
            columnId: 'column-id-03',
            title: 'Title of card 11',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          },
          {
            _id: 'card-id-12',
            boardId: 'board-id-01',
            columnId: 'column-id-03',
            title: 'Title of card 12',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          },
          {
            _id: 'card-id-13',
            boardId: 'board-id-01',
            columnId: 'column-id-03',
            title: 'Title of card 13',
            description: null,
            cover: null,
            memberIds: [],
            comments: [],
            attachments: []
          }
        ]
      }
    ]
  }
}
