'use client';

import { increment } from '@/module/placeholderSlice';
import { useDispatch } from 'react-redux';
import '../../styles/components/sidebar.scss';
import { useAppSelector } from '@/appredux/hooks';

export default function Sidebar() {
  const dispatch = useDispatch();
  const placeholder = useAppSelector((state) => state?.placeholder);

  return placeholder?.value ? (
    <aside className="sidebar p-3 border-end">
      <button
        className="btn btn-light w-100 d-flex justify-"
        onClick={() => {
          dispatch(increment());
        }}
      >
        <span>New Research</span>
        <span>add</span>
      </button>

      <div className="recent-search mt-3">
        <h4 className="fs-6">Past Search</h4>
        <div className="search-result"></div>
      </div>
      <div className="saved-search">
        <h4 className="fs-6">Bookmark</h4>
        <div className="search-result"></div>
      </div>
    </aside>
  ) : (
    <></>
  );
}
