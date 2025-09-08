export const mockData = {
  board: {
    _id: 'board-id-01',
    title: 'We met another day',
    description:
      'Modern web application development with cutting-edge technologies',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-01',
        title: '📋 To Do',
        cardOrderIds: [
          'card-id-01',
          'card-id-02',
          'card-id-03',
          'card-id-04',
          'card-id-05',
          'card-id-06',
          'card-id-07',
        ],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: '🎨 Design System Setup',
            description:
              'Create comprehensive design system with Figma components, color palette, and typography guidelines',
            cover:
              'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            memberIds: ['test-user-id-01'],
            comments: [
              'Need to finalize color scheme',
              'Font selection in progress',
            ],
            attachments: [
              'design-system-v1.fig',
              'color-palette.pdf',
              'typography-guide.pdf',
            ],
          },
          {
            _id: 'card-id-02',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: '🔧 Development Environment',
            description: 'Setup modern development tools and CI/CD pipeline',
            cover: null,
            memberIds: ['test-user-id-02'],
            comments: [
              'Docker configuration ready',
              'Testing automation setup',
            ],
            attachments: ['docker-compose.yml', 'github-actions.yml'],
          },
          {
            _id: 'card-id-03',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: '📱 Mobile Responsive Design',
            description:
              'Ensure all components work perfectly on mobile devices',
            cover: null,
            memberIds: ['test-user-id-03'],
            comments: ['Breakpoint strategy defined'],
            attachments: ['responsive-mockups.png'],
          },
          {
            _id: 'card-id-04',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: '🔍 SEO Optimization',
            description:
              'Implement advanced SEO strategies for better search rankings',
            cover: null,
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-05',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: '⚡ Performance Optimization',
            description: 'Optimize loading speed and user experience',
            cover: null,
            memberIds: ['test-user-id-01'],
            comments: ['Bundle size analysis needed'],
            attachments: ['performance-report.pdf'],
          },
          {
            _id: 'card-id-06',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: '🔐 Security Implementation',
            description:
              'Add authentication, authorization and security measures',
            cover: null,
            memberIds: [],
            comments: ['JWT implementation plan'],
            attachments: ['security-audit.pdf'],
          },
          {
            _id: 'card-id-07',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: '📊 Analytics Integration',
            description: 'Setup Google Analytics and user behavior tracking',
            cover: null,
            memberIds: [],
            comments: ['GA4 configuration pending'],
            attachments: ['analytics-plan.pdf'],
          },
        ],
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-01',
        title: '🚧 In Progress',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          {
            _id: 'card-id-08',
            boardId: 'board-id-01',
            columnId: 'column-id-02',
            title: '🎯 User Authentication System',
            description:
              'Implementing secure login/register with JWT and social auth',
            cover:
              'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            memberIds: ['test-user-id-01', 'test-user-id-02'],
            comments: [
              'OAuth integration 80% complete',
              'Password reset flow ready',
            ],
            attachments: ['auth-flow-diagram.png', 'api-documentation.md'],
          },
          {
            _id: 'card-id-09',
            boardId: 'board-id-01',
            columnId: 'column-id-02',
            title: '💾 Database Architecture',
            description:
              'Designing and implementing MongoDB schema with optimized queries',
            cover: null,
            memberIds: ['test-user-id-03'],
            comments: [
              'Indexing strategy implemented',
              'Migration scripts ready',
            ],
            attachments: ['database-schema.sql', 'performance-metrics.json'],
          },
          {
            _id: 'card-id-10',
            boardId: 'board-id-01',
            columnId: 'column-id-02',
            title: '🎨 Frontend Components',
            description:
              'Building reusable React components with TypeScript and Material-UI',
            cover: null,
            memberIds: ['test-user-id-01'],
            comments: [
              'Component library 60% complete',
              'Storybook documentation added',
            ],
            attachments: ['component-specs.pdf', 'design-tokens.json'],
          },
        ],
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-01',
        title: '✅ Done',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13'],
        cards: [
          {
            _id: 'card-id-11',
            boardId: 'board-id-01',
            columnId: 'column-id-03',
            title: '🏗️ Project Setup & Architecture',
            description:
              'Complete project structure with modern tooling and best practices',
            cover:
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            memberIds: ['test-user-id-01', 'test-user-id-02'],
            comments: [
              'Vite configuration optimized',
              'TypeScript strict mode enabled',
            ],
            attachments: ['project-structure.md', 'eslint-config.js'],
          },
          {
            _id: 'card-id-12',
            boardId: 'board-id-01',
            columnId: 'column-id-03',
            title: '🎭 Landing Page Design',
            description:
              'Modern, responsive landing page with animations and hero section',
            cover: null,
            memberIds: ['test-user-id-03'],
            comments: [
              'A/B testing results positive',
              'Mobile optimization complete',
            ],
            attachments: ['landing-page-mockup.fig', 'user-feedback.pdf'],
          },
          {
            _id: 'card-id-13',
            boardId: 'board-id-01',
            columnId: 'column-id-03',
            title: '📧 Email Service Integration',
            description:
              'Automated email notifications with beautiful templates',
            cover: null,
            memberIds: ['test-user-id-02'],
            comments: [
              'SendGrid integration successful',
              'Email templates responsive',
            ],
            attachments: ['email-templates.html', 'delivery-analytics.csv'],
          },
        ],
      },
    ],
  },
}
