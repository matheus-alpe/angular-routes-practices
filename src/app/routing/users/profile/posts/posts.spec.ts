import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Posts from './posts';
import { PaginatedPosts } from '../../../../core/services/post-service';
import { Post } from '../../../../core/types/post';

describe('Posts', () => {
  let fixture: ComponentFixture<Posts>;
  let component: Posts;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Posts],
    }).compileComponents();

    fixture = TestBed.createComponent(Posts);
    component = fixture.componentInstance;
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should accept paginatedPosts input', () => {
      const mockData = createMockPaginatedPosts({
        total: 50,
        limit: 10,
        skip: 0,
      });
      fixture.componentRef.setInput('paginatedPosts', mockData);
      fixture.detectChanges();
      expect(component.paginatedPosts()).toEqual(mockData);
    });
  });

  describe('Post Rendering', () => {
    it('should render no cards when posts array is empty', () => {
      fixture.componentRef.setInput('paginatedPosts', createMockPaginatedPosts());
      fixture.detectChanges();
      const cards = fixture.debugElement.queryAll(By.css('.card'));
      expect(cards.length).toBe(0);
    });

    it('should render one card per post', () => {
      const posts = [createMockPost(1), createMockPost(2), createMockPost(3)];
      fixture.componentRef.setInput('paginatedPosts', createMockPaginatedPosts({ posts }));
      fixture.detectChanges();
      const cards = fixture.debugElement.queryAll(By.css('.card'));
      expect(cards.length).toBe(3);
    });

    it('should display post title and body content', () => {
      const posts = [createMockPost(1, { title: 'Test Title', body: 'Test Body' })];
      fixture.componentRef.setInput('paginatedPosts', createMockPaginatedPosts({ posts }));
      fixture.detectChanges();
      const card = fixture.debugElement.query(By.css('.card'));
      expect(card.nativeElement.textContent).toContain('Test Title');
      expect(card.nativeElement.textContent).toContain('Test Body');
    });

    it('should render multiple posts with correct data', () => {
      const posts = [
        createMockPost(1, { title: 'First', body: 'Body 1' }),
        createMockPost(2, { title: 'Second', body: 'Body 2' }),
      ];
      fixture.componentRef.setInput('paginatedPosts', createMockPaginatedPosts({ posts }));
      fixture.detectChanges();
      const cards = fixture.debugElement.queryAll(By.css('.card'));
      expect(cards[0].nativeElement.textContent).toContain('First');
      expect(cards[1].nativeElement.textContent).toContain('Second');
    });
  });

  describe('Pagination Data', () => {
    it('should handle pagination metadata correctly', () => {
      const mockData = createMockPaginatedPosts({
        posts: [createMockPost(1)],
        total: 100,
        limit: 10,
        skip: 20,
      });
      fixture.componentRef.setInput('paginatedPosts', mockData);
      fixture.detectChanges();
      const input = component.paginatedPosts();
      expect(input.total).toBe(100);
      expect(input.limit).toBe(10);
      expect(input.skip).toBe(20);
    });

    it('should render correct number of posts matching limit', () => {
      const posts = Array.from({ length: 10 }, (_, i) => createMockPost(i + 1));
      fixture.componentRef.setInput(
        'paginatedPosts',
        createMockPaginatedPosts({ posts, limit: 10 }),
      );
      fixture.detectChanges();
      const cards = fixture.debugElement.queryAll(By.css('.card'));
      expect(cards.length).toBe(10);
    });
  });

  describe('Input Changes', () => {
    it('should update when paginatedPosts input changes', () => {
      const initialPosts = [createMockPost(1)];
      fixture.componentRef.setInput(
        'paginatedPosts',
        createMockPaginatedPosts({ posts: initialPosts }),
      );
      fixture.detectChanges();

      let cards = fixture.debugElement.queryAll(By.css('.card'));
      expect(cards.length).toBe(1);

      const updatedPosts = [createMockPost(2), createMockPost(3)];
      fixture.componentRef.setInput(
        'paginatedPosts',
        createMockPaginatedPosts({ posts: updatedPosts }),
      );
      fixture.detectChanges();

      cards = fixture.debugElement.queryAll(By.css('.card'));
      expect(cards.length).toBe(2);
    });
  });
});

const createMockPost = (id: number, overrides?: Partial<Post>): Post => ({
  id,
  title: `Post ${id}`,
  body: `Body ${id}`,
  tags: [],
  reactions: { dislikes: 0, likes: 0 },
  userId: 1,
  views: 0,
  ...overrides,
});

const createMockPaginatedPosts = (overrides?: Partial<PaginatedPosts>): PaginatedPosts => ({
  posts: [],
  limit: 10,
  skip: 0,
  total: 0,
  ...overrides,
});
