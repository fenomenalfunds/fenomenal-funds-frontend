import styles from './../styles/components/pagination.module.scss';
import Link from 'next/link';
import { FirstPage, LastPage, NavigateBefore, NavigateNext } from '@material-ui/icons';

const PAGES_AROUND = 2;

const PaginationElement = ({ baseUrl, page, children, className, isEdge, isActive }) => {
	return (
			<li className={`${styles.page} ${isEdge ? styles.edge : ''}`}>
				<Link href={`${baseUrl}${page > 1 ? `/page/${page}` : ''}`}>
					<a className={isActive ? styles.active : ''}>
						<span className={className}>{children}</span>
					</a>
				</Link>
			</li>
	);
};

const Pagination = ({ page, start, end, totalItems, firstPageSize, otherPageSize, router }) => {
	const baseUrl = router?.asPath?.replace(/\/page\/\d+/, '');
	const totalPages =
			totalItems <= firstPageSize ? 1 : Math.ceil((totalItems - firstPageSize) / otherPageSize) + 1;
	const elems = [];

	if (totalPages === 1) return <></>;

	// First
	elems.push(<PaginationElement key="<<" baseUrl={baseUrl} isEdge={true} page={1}><FirstPage /></PaginationElement>);

	// Previous
	if (page > 1) {
		elems.push(
				<PaginationElement key="<" baseUrl={baseUrl} isEdge={false} page={page - 1}><NavigateBefore /></PaginationElement>,
		);
	}

	for (
			let renderPage = page - PAGES_AROUND;
			renderPage <= page + PAGES_AROUND;
			renderPage += 1
	) {
		if (renderPage > 0 && renderPage <= totalPages)
			elems.push(
					<PaginationElement
							key={renderPage}
							baseUrl={baseUrl}
							isEdge={false}
							page={renderPage}
							isActive={renderPage === page}
					>{renderPage}</PaginationElement>,
			);
	}

	// Next
	if (page < totalPages) {
		elems.push(
				<PaginationElement key=">" baseUrl={baseUrl} isEdge={false} page={page + 1}><NavigateNext /></PaginationElement>,
		);
	}

	// Last
	elems.push(
			<PaginationElement key=">>" baseUrl={baseUrl} isEdge={true} page={totalPages}><LastPage /></PaginationElement>,
	);

	return (
			<div className={styles.pagination}>
				<ul className={styles.pages}>{elems}</ul>
				<p className={styles.meta}>Showing {start} - {end} of {totalItems} items | {totalPages} pages</p>
			</div>
	);
};

export default Pagination;