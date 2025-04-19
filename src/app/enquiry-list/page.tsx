import Setting from '@/components/common/setting/Setting';
import EnquiryMainArea from '@/components/enquiry-list/EnquiryMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <EnquiryMainArea />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;