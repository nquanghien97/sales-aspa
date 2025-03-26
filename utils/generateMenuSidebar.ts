import { FileCategoriesEntity } from "@/entities/file-categories";
import { generateSlug } from "./generateSlug";
import { menu_sidebar } from "@/constants/menu_sidebar";

export const generateMenuSidebar = (fileCategories: FileCategoriesEntity[] | null) => {
  if (!fileCategories) return menu_sidebar;

  const fileCategoriesSidebar = fileCategories.map(item => ({
    ...item,
    url: `/feedbacks-khach-hang/${generateSlug(item.title)}`,
    allowRole: ['ADMIN', 'USER']
  }));

  return menu_sidebar.map(menu => {
    // Tìm menu "Quản lý tư liệu" và category "FEEDBACKS"
    if (menu.title === 'Quản lý tư liệu') {
      const updatedChildren = menu.children?.map(child => {
        if (child.category === 'FEEDBACKS') {
          // Lọc ra các item mới chưa có trong FEEDBACKS
          const newItems = fileCategoriesSidebar.filter(
            (newItem) => !child.children?.some(existing => existing.url === newItem.url)
          );

          return {
            ...child,
            children: [...(child.children || []), ...newItems]
          };
        }
        return child;
      });

      return { ...menu, children: updatedChildren };
    }

    return menu;
  });
};
