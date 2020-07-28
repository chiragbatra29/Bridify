import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchFeeds } from '../../store/actions/feeds';
import Feed from "../../components/feed/feed";
import InfiniteScroll from 'react-infinite-scroll-component';
import { CATEGORY_FILTER, COUNTRY_FILTER, PAGE_SIZE } from '../../constants/constants';
import { STRINGS } from '../../constants/strings';
import './style.css';

const Feeds: FunctionComponent = () => {
    const dispatch = useDispatch()
    const { feeds } = useSelector((state: any) => state.feeds)
    const [pageNumber, setPageNumber] = useState(1)
    const [filters, setFilters] = useState({
        country: '',
        category: ''
    })

    useEffect(() => {
        dispatch(fetchFeeds(filters, pageNumber, PAGE_SIZE));
    }, [pageNumber, filters])

    const renderFeeds = () => {
        const clickCommunity = (link: string) => window.open(link, "_blank")
        return feeds && feeds.map((feed: any, index: number) =>
            <Feed data={feed} key={index} clickCommunity={clickCommunity} />
        )
    }

    const updatePage = () => setPageNumber(pageNumber + 1)

    const filterClick = (e: any) => {
        setPageNumber(1);
        const name = e.target.name
        const value = e.target.value
        setFilters({ ...filters, [name]: value })
    }

    const renderFilterOptions = (optionsArray: any) => optionsArray.map((option: any) =>
        <option key={option.key}
            value={option.value}>{option.key}</option>
    )

    return (
        <div className="feeds">
            <div className='form-group'>
                <label htmlFor="country">
                    <p className="filter-name">{STRINGS.COUNTRY}:</p>
                    <select className="form-control"
                        value={filters.country}
                        onChange={filterClick}
                        name="country">
                        {renderFilterOptions(COUNTRY_FILTER)}
                    </select>
                </label>
                <label htmlFor="category">
                    <p className="filter-name">{STRINGS.CATEGORY}:</p>
                    <select className="form-control"
                        value={filters.category}
                        onChange={filterClick}
                        name="category">
                        {renderFilterOptions(CATEGORY_FILTER)}
                    </select>
                </label>
            </div>

            <InfiniteScroll
                dataLength={feeds.length}
                next={updatePage}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {renderFeeds()}
            </InfiniteScroll>
        </div>
    )
}

export default Feeds