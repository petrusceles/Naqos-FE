import React from "react";
import KostReview from "./review.jsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
function ReviewCard(props) {
  return (
    <div className="fixed text-xl  z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white drop-shadow-xl rounded-xl grid w-3/4 gap-4 max-h-[600px] overflow-scroll no-scrollbar lg:max-w-[600px]">
      <div className="font-bold text-primary sticky top-0 bg-white shadow-md px-5 py-4 flex flex-wrap justify-between">
        <div>Reviews</div>
        <XMarkIcon
          className="max-w-[25px] cursor-pointer"
          onClick={() => props?.reviewsState?.setIsReviewShow(false)}
        />
      </div>
      <div className="border-b-2 pb-2 px-5">
        <KostReview
          name={props?.reviews[0]?.user?.name}
          star={props?.reviews[0]?.star}
          updated_at={props?.reviews[0]?.updatedAt}
          review={props?.reviews[0]?.review}
          avatar_url={props?.reviews[0]?.user?.avatar_url}
        />
      </div>
      <div className="border-b-2 pb-2 px-5">
        <KostReview
          name={props?.reviews[0]?.user?.name}
          star={props?.reviews[0]?.star}
          updated_at={props?.reviews[0]?.updatedAt}
          review={props?.reviews[0]?.review}
          avatar_url={props?.reviews[0]?.user?.avatar_url}
        />
      </div>
      <div className="border-b-2 pb-2 px-5">
        <KostReview
          name={props?.reviews[0]?.user?.name}
          star={props?.reviews[0]?.star}
          updated_at={props?.reviews[0]?.updatedAt}
          review={props?.reviews[0]?.review}
          avatar_url={props?.reviews[0]?.user?.avatar_url}
        />
      </div>
      <div className="border-b-2 pb-2 px-5">
        <KostReview
          name={props?.reviews[0]?.user?.name}
          star={props?.reviews[0]?.star}
          updated_at={props?.reviews[0]?.updatedAt}
          review={props?.reviews[0]?.review}
          avatar_url={props?.reviews[0]?.user?.avatar_url}
        />
      </div>
      <div className="border-b-2 pb-2 px-5">
        <KostReview
          name={props?.reviews[0]?.user?.name}
          star={props?.reviews[0]?.star}
          updated_at={props?.reviews[0]?.updatedAt}
          review={props?.reviews[0]?.review}
          avatar_url={props?.reviews[0]?.user?.avatar_url}
        />
      </div>
    </div>
  );
}

export default ReviewCard;
